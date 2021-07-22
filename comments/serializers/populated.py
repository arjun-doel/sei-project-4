from jwt_auth.serializer import UserSerializer
from .common import CommentSerialziers

class PopulatedCommentSerializer(CommentSerialziers):
    owner = UserSerializer()