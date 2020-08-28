import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PosterRoutingModule } from './poster-templates/poster-routing.module';
import { EmpleoRoutingModule } from './principal-pages/principal-routing.module';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

 {path: '' ,  redirectTo: '/empleo' , pathMatch:'full'},
 {path: '**' , component: ErrorComponent}

]; 

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),
  AuthRoutingModule,
  PosterRoutingModule,
  EmpleoRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }