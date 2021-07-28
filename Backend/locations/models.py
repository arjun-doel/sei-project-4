from math import degrees
from django.db import models

class Location(models.Model):
    price_tier = (
        (1, 'Inexpensive'),
        (2, 'Moderately Expensive'),
        (3, 'Expensive'),
        (4, 'Very Expensive')
    )
    location_tier = (
        (1, 'landmarks'),
        (2, 'food'),
        (3, 'bars'),
    )
    
    name = models.CharField(max_length=50, default=None)
    image1 = models.CharField(max_length=500, blank=True)
    image2 = models.CharField(max_length=500, blank=True)
    image3 = models.CharField(max_length=500, blank=True)
    description = models.TextField(max_length=200, default=None)
    price_rage = models.IntegerField(choices=price_tier, default=2)
    location_type = models.IntegerField(choices=location_tier, default=2)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, default=None, blank=True)
    postal_code = models.CharField(max_length=100, default=None)
    country = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=25, decimal_places=10, default=0, blank=True)
    longitude = models.DecimalField(max_digits=25, decimal_places=10, default=0, blank=True)
    post_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="locations",
        on_delete = models.CASCADE,
    )
    
    def __str__(self):
        return f"{self.name} - {self.city}"
    
    
