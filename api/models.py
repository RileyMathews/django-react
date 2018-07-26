from django.db import models

# Create your models here.

class Airport(models.Model):
    """ class to represent an airport object from the database """
    name = models.CharField(max_length=30)
    call_sign = models.CharField(max_length=3)
    city = models.CharField(max_length=20)
    international = models.BooleanField()
