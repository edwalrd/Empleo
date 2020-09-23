import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PosterRoutingModule } from './poster-templates/poster-routing.module';
import { PrincipalPages } from './principal-pages/principal-routing.module';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

 {path: '' ,  redirectTo: '' , pathMatch:'full'},
 {path: '**' , component: ErrorComponent}

]; 

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),
  AuthRoutingModule,
  PosterRoutingModule,
  PrincipalPages
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }