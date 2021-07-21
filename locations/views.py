from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Location
from .serializer import LocationSerializer

class LocationListView(APIView):
    
    def get(self, _request):
        location = Location.objects.all()
        serializers_locations = LocationSerializer(location, many=True)
        return Response(serializers_locations.data, status=status.HTTP_200_OK)
    
