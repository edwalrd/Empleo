import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleoComponent } from './empleo/empleo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EmpleoComponent],
  exports: [EmpleoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalModule { }
