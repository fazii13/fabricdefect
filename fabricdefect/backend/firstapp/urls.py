# backend/firstapp/urls.py

from django.urls import path
from .views import *
urlpatterns = [
    path('react/', ReactListView.as_view(), name='react-list'),
    path('react/<int:pk>/', ReactDetailView.as_view(), name='react-detail'),
    path('run-backend-code/', run_backend_code, name='run-backend-code'),
    path('video-stream/', stream_video, name='video-stream'),
    path('upload-image/', upload_image, name='upload-image'),
path('products/', ProductListView.as_view(), name='product-list'),

]

