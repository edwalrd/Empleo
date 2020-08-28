import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleoComponent } from './empleo/empleo.component';


const routes: Routes = [

 
  { path: '', component: EmpleoComponent },
  { path: 'empleo', component: EmpleoComponent }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleoRoutingModule { }