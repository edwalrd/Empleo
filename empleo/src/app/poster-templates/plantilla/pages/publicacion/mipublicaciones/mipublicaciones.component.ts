import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

import {Puesto } from "../../../../../modelo/puesto";


@Component({
  selector: 'app-mipublicaciones',
  templateUrl: './mipublicaciones.component.html',
  styleUrls: ['./mipublicaciones.component.css']
})
export class MipublicacionesComponent implements OnInit {

  public data : Puesto[];

  public paginaActual: number = 1;

  constructor(

    private _services: PublicacionService

  ) { }

  ngOnInit(): void {

    console.log(this._services.TodoPuesto().subscribe(

      resp => {

        this.data = resp.puesto;

      },
      error =>{
        console.log(error);
        
      }


    ));

  }

}
