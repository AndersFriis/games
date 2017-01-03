from rest_framework import viewsets
from .models import Nintendo
from .serializers import NintendoSerializer


class NintendoViewSet(viewsets.ModelViewSet):
    queryset = Nintendo.objects.all()
    serializer_class = NintendoSerializer