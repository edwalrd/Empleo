import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PosterPageComponent } from "./poster-templates.component";
import { DashboardComponent } from './plantilla/pages/dashboard/dashboard.component';
import { CrearComponent } from './plantilla/pages/publicacion/crear/crear.component';
import { EditarComponent } from './plantilla/pages/publicacion/editar/editar.component';
import { EliminarComponent } from './plantilla/pages/publicacion/eliminar/eliminar.component';
import { SobreNosotrosComponent } from './plantilla/pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [

  {path: 'poster' , 
  component: PosterPageComponent,

  children: [
    {path: '' , component: DashboardComponent },
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'publicacion/crear' , component: CrearComponent},
    {path: 'publicacion/editar' , component: EditarComponent},
    {path: 'publicacion/eliminar' , component: EliminarComponent},
    {path: 'nosotro' , component: SobreNosotrosComponent},


    
  ]
}
]; 

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosterRoutingModule { }