from comments.serializers.populated import PopulatedCommentSerializer
from .common import LocationSerializer

class PopulatedLocationSerializer(LocationSerializer):
    comments = PopulatedCommentSerializer(many=True)