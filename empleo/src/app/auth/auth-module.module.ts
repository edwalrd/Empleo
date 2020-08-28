import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegistrarComponent],
  exports: [LoginComponent, RegistrarComponent],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModuleModule { }
