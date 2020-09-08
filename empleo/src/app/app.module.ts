import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

//Modulos
import { PosterModule } from "./poster-templates/poster.module";
import { AuthModuleModule } from "./auth/auth-module.module";
import { PrincipalModule } from "./principal-pages/principal.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PosterModule,
    AuthModuleModule,
    PrincipalModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MomentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
