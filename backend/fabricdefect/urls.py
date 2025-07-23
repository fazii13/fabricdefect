from django.contrib import admin
from django.urls import path, include
from firstapp.views import home  # Import the home view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('firstapp.urls')),  # Include firstapp URLs under 'api/'
    path('', home, name='home')  # Add the home view for the root URL
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
