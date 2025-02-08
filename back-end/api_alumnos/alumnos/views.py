from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Alumnos
from .serializers import AlumnoSerializer
from rest_framework.permissions import AllowAny

# Create your views here.

class CreateViewAlumno(generics.CreateAPIView):
    queryset = Alumnos.objects.all()
    serializer_class = AlumnoSerializer
    permission_classes = [AllowAny]

class ListByGradeViewAlumno(generics.ListAPIView):
    serializer_class = AlumnoSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        grado = self.kwargs['grado']
        return Alumnos.objects.filter(grado=grado)



