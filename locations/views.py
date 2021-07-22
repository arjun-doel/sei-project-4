from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from geopy.geocoders import Nominatim

from .models import Location
from .serializers.common import LocationSerializer
from .serializers.populated import PopulatedLocationSerializer


class LocationListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        location = Location.objects.all()
        serializers_locations = PopulatedLocationSerializer(location, many=True)
        return Response(serializers_locations.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        request.data['owner'] = request.user.id
        location_to_before = request.data
        address_compiled = location_to_before["address"] + " " + location_to_before["postal_code"]
        address_replace = address_compiled.replace(",", "")
        
        try:
            geolocator = Nominatim(user_agent="useLocal")
            location = geolocator.geocode(address_replace)
            print(location)
            location_to_before["latitude"] = location.latitude
            location_to_before["longitude"] = location.longitude
        except:
            raise NotFound(detail="oops...cannot find location coordinates 🤷🏽‍♂️")
        
        location_to_after = LocationSerializer(data=location_to_before)
        if location_to_after.is_valid():
            location_to_after.save()
            return Response(location_to_after.data, status=status.HTTP_201_CREATED)
        return Response(location_to_after.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    