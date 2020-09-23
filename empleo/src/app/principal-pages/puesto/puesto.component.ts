import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puesto } from 'src/app/modelo/puesto';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.css']
})
export class PuestoComponent implements OnInit {

  public puesto : Puesto ;

  public id: any;

  constructor(

    private _service: PublicacionService,
    private _routes: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this._routes.params.subscribe(
      params => {

        this.id = params.id;

      },

      err => {
        console.log(err);

      }

    )

    this._service.unPuesto(this.id).subscribe(

      resp => {

        this.puesto = resp.puesto
        console.log(this.puesto);
      },

      err => {

        console.log(err);

      }
    )

  }

}
