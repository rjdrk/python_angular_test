import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../servicio/alumno.service';

@Component({
  selector: 'app-consultar-alumno',
  standalone: false,
  templateUrl: './consultar-alumno.component.html',
  styleUrl: './consultar-alumno.component.css'
})
export class ConsultarAlumnoComponent implements OnInit {
  alumnos: any[] = [];
  grado = 'Primero';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.consultarAlumnos();
  }

  consultarAlumnos() {
    this.alumnoService.consultarAlumno(this.grado).subscribe(
      response => {
        this.alumnos = response;
      },
      error => {
        console.error('Error al consultar alumnos:', error);
        alert('Error al consultar los alumnos');
      }
    );
  }
}
