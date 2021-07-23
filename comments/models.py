from django.db import models

class Comment(models.Model):
    RATING_CHOICES = (
        (1),
        (2),
        (3),
        (4),
        (5),
    )
    
    text = models.TextField(max_length=300)
    rating = models.IntegerChoices(choices=RATING_CHOICES, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.ForeignKey(
        "locations.Location",
        related_name="comments",
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="comments",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"Comments: {self.text}"