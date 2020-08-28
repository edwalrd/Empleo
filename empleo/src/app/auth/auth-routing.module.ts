import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [

  {path: 'login' ,  component: LoginComponent},
  {path: 'registrar' ,  component: RegistrarComponent },
]; 

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }