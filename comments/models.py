from django.db import models

class Comment(models.Model):
    Rating_CHOICES = (
    (1, 'Poor'),
    (2, 'Average'),
    (3, 'Good'),
    (4, 'Very Good'),
    (5, 'Excellent')
)
    
    text = models.TextField(max_length=300)
    rating = models.IntegerField(choices=Rating_CHOICES, default=1)
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