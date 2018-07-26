# api/urls.py
from django.urls import path

from .views import UserViewSet, PlatformViewSet, UesrGameViewSet, UserPlatformViewSet, UserPlatformEmbededViewSet, UserGameEmbededViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
urlpatterns = router.urls