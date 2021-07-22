from django.urls import path
from .views import CommentListView, CommentDetailView

urlspatterns = [
    path('', CommentListView.as_view()),
    path('<int:pk>', CommentDetailView.as_view())
]