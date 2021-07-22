from jwt_auth.serializer import UserSerializer
from .common import CommentSerializers

class PopulatedCommentSerializer(CommentSerializers):
    owner = UserSerializer()