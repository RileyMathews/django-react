from rest_framework import viewsets

from api import models
from . import serializers

class Airport_Viewset(viewsets.ModelViewSet):
    """ viewset for the airport endpoint """
    queryset = models.Airport.objects.all()
    serializer_class = serializers.Airport_Serializer