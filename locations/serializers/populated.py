from comments.serializers.common import CommentSerialziers
from .common import LocationSerializer

class PopulatedLocationSerializer(LocationSerializer):
    comments = CommentSerialziers(many=True)