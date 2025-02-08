from django.urls import path
from . import views

urlpatterns = [
    path('crear-alumno/', views.CreateViewAlumno.as_view(), name='crear_alumno'),
    path('consultar-alumno/<str:grado>/', views.ListByGradeViewAlumno.as_view(), name='consultar_alumno'),
]