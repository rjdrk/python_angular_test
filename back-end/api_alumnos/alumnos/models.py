from django.db import models

# Create your models here.
class Alumnos(models.Model):
    id_alumno = models.AutoField(primary_key=True)
    nombre_alumno = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    nombre_padre = models.CharField(max_length=100)
    nombre_madre = models.CharField(max_length=100)
    grado = models.CharField(max_length=50)
    seccion = models.CharField(max_length=10)
    fecha_ingreso = models.DateField()

    class Meta:
        db_table = 'tbl_alumno'

    def __str__(self):
        return self.nombre_alumno