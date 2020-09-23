import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

import { provincias } from '../../class/provincias'

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  public datos: any[] = [];

  public provincias: any[] = [];

  public provincia = new provincias();

  public paginaActual: number = 1;

  public total: any;

  public fail: any;

  public palabra: any;

  public word: any;

  constructor(
    private _fb: FormBuilder,
    private _service: PublicacionService,
    private _routes: ActivatedRoute
  ) {

    this._routes.params.subscribe(

      params => {
        this.palabra = params.buscar
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {

    if (this.palabra) {

      this.provincias = this.provincia.provincias;

      this._service.Busqueda(this.palabra).subscribe(

        resp => {
          this.datos = resp.puesto;
          this.total = resp.puesto.length;
          this.fail = "";
        },
        err => {
          this.fail = err.error.mensaje;
        }
      )

    }
    else {

      this.provincias = this.provincia.provincias;
      this.todoPuesto();
    }


  }

  public buscador = this._fb.group({

    palabra: [''],
    provincia: ['']

  })

  async buscar() {

    this.palabra = this.buscador.get('palabra').value

    if (!this.palabra) {

      this.todoPuesto()
      this.fail = "";

    } else {

      this._service.Busqueda(this.palabra).subscribe(

        resp => {
          this.datos = resp.puesto;
          this.total = resp.puesto.length;
          this.fail = "";
        },
        err => {
          this.fail = err.error.mensaje;
        }
      )
    }

  }

  todoPuesto() {

    this._service.TodoPuesto().subscribe(

      resp => {
        this.datos = resp.puesto
        this.total = resp.puesto.length;
      },
      err => {
        console.log(err);
      }
    )
  }

}
