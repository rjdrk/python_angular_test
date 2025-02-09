import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey; 

  private httpOptions = {
    headers: new HttpHeaders({
      'API-KEY': this.apiKey
    })
  };

  constructor(private http: HttpClient) { }

  crearAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-alumno/`, alumno, this.httpOptions);
  }

  consultarAlumno(grado: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultar-alumno/${grado}`, this.httpOptions);
  }
}
