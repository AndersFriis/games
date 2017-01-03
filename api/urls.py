from django.conf.urls import include, url
from rest_framework import routers
from games.viewsets import GamesViewSet
from nintendo.viewsets import NintendoViewSet





router = routers.DefaultRouter()
router.register(r'games', GamesViewSet)
router.register(r'nintendo', NintendoViewSet)



urlpatterns = [
    url(r'^', include(router.urls)),


]