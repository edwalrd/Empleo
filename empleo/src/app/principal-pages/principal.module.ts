import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleoComponent } from './empleo/empleo.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmpleoComponent, HeaderComponent, FooterComponent, BuscadorComponent],
  exports: [EmpleoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
     ReactiveFormsModule
  ]
})
export class PrincipalModule { }
