import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleoComponent } from './empleo/empleo.component';
import { PrincipalPagesComponent } from './principal-pages.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PuestoComponent } from './puesto/puesto.component';


const routes: Routes = [

  {
    path: '',
    component: PrincipalPagesComponent,

    children: [

      { path: '', component: EmpleoComponent },

      { path: 'empleo', component: EmpleoComponent },

      { path: 'buscar/empleos', component: PublicacionesComponent },

      { path: 'buscar/empleos/:buscar', component: PublicacionesComponent },

      { path: 'puesto/:id', component: PuestoComponent },

    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalPages { }