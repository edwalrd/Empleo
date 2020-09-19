import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PosterPageComponent } from "./poster-templates.component";
import { DashboardComponent } from './plantilla/pages/dashboard/dashboard.component';
import { CrearComponent } from './plantilla/pages/publicacion/crear/crear.component';
import { SobreNosotrosComponent } from './plantilla/pages/sobre-nosotros/sobre-nosotros.component';
import { DetalleComponent } from './plantilla/pages/publicacion/detalle/detalle.component';

import { AuthGuard } from "../guards/auth.guard";
import { MipublicacionesComponent } from './plantilla/pages/publicacion/mipublicaciones/mipublicaciones.component';
import { PerfilComponent } from './opciones/perfil/perfil.component';

const routes: Routes = [

  {path: 'poster' , 
  component: PosterPageComponent,
  canActivate: [AuthGuard],

  children: [
    {path: '' , component: DashboardComponent },
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'publicacion/crear' , component: CrearComponent},
    {path: 'publicacion/mipublicaciones' , component: MipublicacionesComponent},
    {path: 'publicacion/detalle/:id' , component: DetalleComponent},
    {path: 'nosotro' , component: SobreNosotrosComponent},
    {path: 'perfil' , component: PerfilComponent},


  ]
}
]; 

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosterRoutingModule { }