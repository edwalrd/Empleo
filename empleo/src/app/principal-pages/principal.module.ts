import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleoComponent } from './empleo/empleo.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [EmpleoComponent, HeaderComponent, FooterComponent, BuscadorComponent],
  exports: [EmpleoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalModule { }
