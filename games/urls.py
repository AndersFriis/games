from django.conf.urls import include, url
from rest_framework import routers
from .viewsets import GamesViewSet


router = routers.DefaultRouter()
router.register(r'games', GamesViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^accounts/', include('accounts.urls', namespace='accounts')),
]