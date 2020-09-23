import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleoComponent } from './empleo/empleo.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment'; 

import {NgxPaginationModule} from 'ngx-pagination';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PrincipalPagesComponent } from './principal-pages.component';
import { PuestoComponent } from './puesto/puesto.component';


@NgModule({
  declarations: [EmpleoComponent, HeaderComponent, FooterComponent, BuscadorComponent, PublicacionesComponent, PrincipalPagesComponent, PuestoComponent],
  exports: [EmpleoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     MomentModule
  ]
})
export class PrincipalModule { }
