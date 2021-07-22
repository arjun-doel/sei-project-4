from django.db.models.base import Model
from rest_framework import serializers
from ..models import Comment

class CommentSerialziers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'