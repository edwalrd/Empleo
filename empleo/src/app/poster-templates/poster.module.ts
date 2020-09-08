import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { MomentModule } from 'angular2-moment'; 

// Componentes
import { PosterPageComponent } from './poster-templates.component';

import { FooterComponent } from './plantilla/footer/footer.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { HeaderComponent } from './plantilla/header/header.component';

import { DashboardComponent } from './plantilla/pages/dashboard/dashboard.component';
import { CrearComponent } from './plantilla/pages/publicacion/crear/crear.component';
import { SobreNosotrosComponent } from './plantilla/pages/sobre-nosotros/sobre-nosotros.component';
import { MipublicacionesComponent } from './plantilla/pages/publicacion/mipublicaciones/mipublicaciones.component';
import { DetalleComponent } from './plantilla/pages/publicacion/detalle/detalle.component';



@NgModule({

  declarations: [
    PosterPageComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    
    DashboardComponent,
    CrearComponent,
    SobreNosotrosComponent,
    MipublicacionesComponent,
    DetalleComponent,

  ],

  exports: [
    PosterPageComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,

    DashboardComponent,
    CrearComponent,
    MipublicacionesComponent,
    SobreNosotrosComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MomentModule
  ]

})

export class PosterModule { }
