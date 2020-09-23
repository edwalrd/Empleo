import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateFormatPipe } from 'angular2-moment';
import { provincias } from 'src/app/class/provincias';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit {

  public puesto: any[] = [];

  public hoy = new Date();

  public paginaActual: number = 1;

  public provincias: any[] = [];

  public provincia = new provincias();

  constructor(

    private _fb: FormBuilder,
    private _Servicios: PublicacionService,
    private _router: Router

  ) { }

  ngOnInit(): void {

    this.provincias = this.provincia.provincias;

    this.allpuesto();

    console.log(this.hoy);

  }

  public Formbuscar = this._fb.group({

    palabra: [''],
    provincia: [this.provincia.provincias[0]]

  })

  async allpuesto() {

    await this._Servicios.TodoPuesto().subscribe(

      resp => {

        this.puesto = resp.puesto

      },
      err => {
        console.log(err);
      }

    )
  }

  Buscar() {

    console.log(this.Formbuscar.value);

    var palabra = this.Formbuscar.get('palabra').value;

    var provincia = this.Formbuscar.get('provincia').value;

    this._router.navigate(['/buscar/empleos/', palabra]);

  }

}
