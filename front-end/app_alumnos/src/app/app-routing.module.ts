import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlumnoComponent } from './componente/crear-alumno/crear-alumno.component';
import { ConsultarAlumnoComponent } from './componente/consultar-alumno/consultar-alumno.component';

const routes: Routes = [
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'consultar-alumno', component: ConsultarAlumnoComponent },
  { path: '', redirectTo: '/crear-alumno', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
