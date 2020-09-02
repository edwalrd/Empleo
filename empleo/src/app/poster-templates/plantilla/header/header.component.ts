import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   public usuario: Usuario;
   
  constructor(
    private services: AuthService

  ) { }

  ngOnInit(): void {

  this.usuario = this.services.person;

  console.log(this.usuario);
  
  }

  btnlogout() {

    this.services.logout()

  }
}
