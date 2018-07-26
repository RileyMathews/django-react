# api/urls.py
from django.urls import path

from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('airport', views.Airport_Viewset, base_name='airports')
urlpatterns = router.urls