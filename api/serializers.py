from rest_framework import serializers
from api import models

class Airport_Serializer(serializers.ModelSerializer):
    """ serializer for the airport model """
    class Meta:
        fields = (
            'id',
            'name',
            'call_sign',
            'city',
            'international',
        )
        model = models.Airport
