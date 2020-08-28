import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { PosterPageComponent } from './poster-templates.component';

import { FooterComponent } from './plantilla/footer/footer.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { HeaderComponent } from './plantilla/header/header.component';

import { DashboardComponent } from './plantilla/pages/dashboard/dashboard.component';
import { CrearComponent } from './plantilla/pages/publicacion/crear/crear.component';
import { EditarComponent } from './plantilla/pages/publicacion/editar/editar.component';
import { EliminarComponent } from './plantilla/pages/publicacion/eliminar/eliminar.component';
import { SobreNosotrosComponent } from './plantilla/pages/sobre-nosotros/sobre-nosotros.component';

@NgModule({

  declarations: [
    PosterPageComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,

    DashboardComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    SobreNosotrosComponent

  ],

  exports: [
    PosterPageComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,

    DashboardComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    SobreNosotrosComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]

})

export class PosterModule { }
