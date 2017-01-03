from rest_framework import serializers
from .models import Nintendo


class NintendoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nintendo
        fields = ('id', 'title', 'genre', 'platform', 'year', )