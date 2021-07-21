from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=50, default=None)
    image1 = models.CharField(max_length=500, blank=True)
    image2 = models.CharField(max_length=500, blank=True)
    image3 = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=200, default=None)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, null=True)
    postal_code = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100)
    longitude = models.FloatField(default=None, blank=True)
    lattiude = models.FloatField(default=None, blank=True)
    post_at = models.DateTimeField(auto_now_add=True)
    
    
    
