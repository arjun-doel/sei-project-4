from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=50, default=None)
    image1 = models.CharField(max_length=500, blank=True)
    image2 = models.CharField(max_length=500, blank=True)
    image3 = models.CharField(max_length=500, blank=True)
    description = models.TextField(max_length=200, default=None)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, default=None, blank=True)
    postal_code = models.CharField(max_length=100, default=None)
    country = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=18, decimal_places=10, default=0, blank=True)
    longitude = models.DecimalField(max_digits=18, decimal_places=10, default=0, blank=True)
    post_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.city}"
    
    
