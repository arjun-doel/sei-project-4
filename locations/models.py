from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=50, default=None)
    image1 = models.CharField(max_length=500, blank=True)
    image2 = models.CharField(max_length=500, blank=True)
    image3 = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=200, default=None)
    post_at = models.CharField(auto_created=True)
    
    
    
