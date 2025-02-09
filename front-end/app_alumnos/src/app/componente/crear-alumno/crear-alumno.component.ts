import { Component } from '@angular/core';
import { AlumnoService } from '../../servicio/alumno.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-alumno',
  standalone: false,
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css'
})
export class CrearAlumnoComponent {
  alumno = {
    nombre_alumno: '',
    fecha_nacimiento: null as NgbDateStruct | null,
    nombre_padre: '',
    nombre_madre: '',
    grado: '',
    seccion: '',
    fecha_ingreso: null as NgbDateStruct | null,
  };

  constructor(private alumnoService:AlumnoService) { }

  onSubmit() {
    if (this.validarCampos()) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const datosParaEnviar = {
      ...this.alumno,
      fecha_nacimiento: this.convertirFechaISO(this.alumno.fecha_nacimiento),
      fecha_ingreso: this.convertirFechaISO(this.alumno.fecha_ingreso)
    } ;

    this.alumnoService.crearAlumno(datosParaEnviar).subscribe(
      response => {
        alert('Alumno creado exitosamente');
        this.limpiarCampos();
      },
      error => {
        alert('Error al crear el alumno');
      }
    );
  }

  validarCampos(): boolean {
    return Object.values(this.alumno).some(value => value === '');
  }

  limpiarCampos() {
    this.alumno = {
        nombre_alumno: '',
        fecha_nacimiento: null,
        nombre_padre: '',
        nombre_madre: '',
        grado: '',
        seccion: '',
        fecha_ingreso: null
    };
  }

  convertirFechaISO(fecha: NgbDateStruct | null): string | null {
    if (!fecha) return null;
    return `${fecha.year}-${fecha.month.toString().padStart(2, '0')}-${fecha.day.toString().padStart(2, '0')}`;
  }
}
