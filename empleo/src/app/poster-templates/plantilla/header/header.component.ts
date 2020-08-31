import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
     private services: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  btnlogout(){

    this.services.logout()
   this.router.navigate(['/login'])
    
  }
}
