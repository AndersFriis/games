from django.conf.urls import include, url
from rest_framework import routers
from games.viewsets import GamesSiteViewSet




router = routers.DefaultRouter()
router.register(r'games', GamesViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),


]