import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

import { Puesto } from "../../../../../modelo/puesto";


@Component({
  selector: 'app-mipublicaciones',
  templateUrl: './mipublicaciones.component.html',
  styleUrls: ['./mipublicaciones.component.css']
})
export class MipublicacionesComponent implements OnInit {

  public data: Puesto[];

  public datos: Puesto[];

  public keyword = "nombre";

  public params: string;

  public paginaActual: number = 1;

  constructor(

    private _services: PublicacionService


  ) { }

  ngOnInit(): void {


    this.GetPuesto()

  }


  GetPuesto() {

    this._services.TodoPuesto().subscribe(

      resp => {

        this.data = resp.puesto;

        this.datos = resp.puesto;
      },
      error => {
        console.log(error);
      }

    );
  }

  selectEvent(value) {

    this._services.Busqueda(value.nombre).subscribe(

      done => {
        this.datos = done.puesto

      },
      err => {

        console.log(err);

      }
    )


  }

  buscar(value) {


    this._services.Busqueda(value).subscribe(

      done => {
        this.datos = done.puesto

      },
      err => {

        console.log(err);

      }
    )


  }


}

