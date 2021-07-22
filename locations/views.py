import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Location
from .serializer import LocationSerializer


class LocationListView(APIView):

    def get(self, _request):
        location = Location.objects.all()
        serializers_locations = LocationSerializer(location, many=True)
        return Response(serializers_locations.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        # Grab data here
        location_to_before = request.data
        address_compiled = location_to_before["address"] + " " + location_to_before["city"] + " " + location_to_before["postal_code"]
        print('address => ', address_compiled.replace(",", ""))
        location_to_before["latitude"] = 1.55555
        print(location_to_before)
        location_to_after = LocationSerializer(data=location_to_before)
        if location_to_after.is_valid():
            location_to_after.save()
            return Response(location_to_after.data, status=status.HTTP_201_CREATED)
        return Response(location_to_after.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    