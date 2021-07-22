from jwt_auth.serializer import UserSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from .common import LocationSerializer

class PopulatedLocationSerializer(LocationSerializer):
    comments = PopulatedCommentSerializer(many=True)
    owner = UserSerializer()