from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Alumnos
from .serializers import AlumnoSerializer

# Create your views here.

class CreateViewAlumno(generics.CreateAPIView):
    queryset = Alumnos.objects.all()
    serializer_class = AlumnoSerializer
    permission_classes = [AllowAny]

class ListByGradeViewAlumno(generics.ListAPIView):
    permission_classes = [AllowAny]

    def get(self, request, grado):
        alumnos = Alumnos.objects.filter(grado=grado)
        serializer = AlumnoSerializer(alumnos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def options(self, request, grado):
        return Response(status=status.HTTP_204_NO_CONTENT)



