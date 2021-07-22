from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from geopy.geocoders import Nominatim

from .models import Location
from .serializer import LocationSerializer


class LocationListView(APIView):

    def get(self, _request):
        location = Location.objects.all()
        serializers_locations = LocationSerializer(location, many=True)
        return Response(serializers_locations.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        location_to_before = request.data
        address_compiled = location_to_before["address"] + " " + location_to_before["postal_code"]
        address_replace = address_compiled.replace(",", "")
        
        try:
            geolocator = Nominatim(user_agent="useLocal")
            location = geolocator.geocode(address_replace)
            location_to_before["latitude"] = location.latitude
            location_to_before["longitude"] = location.longitude
        except:
            raise NotFound(detail="oops...cannot find location coordinates 🤷🏽‍♂️")
        
        location_to_after = LocationSerializer(data=location_to_before)
        if location_to_after.is_valid():
            location_to_after.save()
            return Response(location_to_after.data, status=status.HTTP_201_CREATED)
        return Response(location_to_after.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    