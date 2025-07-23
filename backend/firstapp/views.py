from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from django.http import JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .backend_logic.backend_tasks import execute_backend_code, generate_frames,predict_image
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile


class ReactListView(APIView):
    def get(self, request):
        output = [{"employee": output.employee, "department": output.department} for output in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class ReactDetailView(APIView):
    def get(self, request, pk):
        react = get_object_or_404(React, pk=pk)
        serializer = ReactSerializer(react)
        return Response(serializer.data)

    def put(self, request, pk):
        react = get_object_or_404(React, pk=pk)
        serializer = ReactSerializer(react, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        react = get_object_or_404(React, pk=pk)
        react.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def home(request):
    return render(request, 'home.html')

@csrf_exempt
@api_view(['GET'])
def stream_video(request):
    """Stream video from the YOLO model."""
    return StreamingHttpResponse(generate_frames(), content_type='multipart/x-mixed-replace; boundary=frame')

@api_view(['POST'])
def run_backend_code(request):
    """Execute backend code and return result as JSON."""
    result = execute_backend_code()
    return JsonResponse({'message': result})

@api_view(['POST'])
def upload_image(request):
    if 'image' not in request.FILES:
        return JsonResponse({'error': 'No image provided'}, status=400)

    image = request.FILES['image']
    image_path = default_storage.save('uploaded_images/' + image.name, ContentFile(image.read()))
    annotated_image_path = predict_image(default_storage.path(image_path))

    # Ensure the URL is accessible from the web server root
    annotated_image_url = default_storage.url(annotated_image_path).replace('C:/Users/DELL/Desktop/fabricdefect/backend/', '')
    return JsonResponse({'image_url': annotated_image_url})

class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)