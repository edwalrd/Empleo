import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicacionService } from 'src/app/servicios/publicacion.service';
import { Puesto } from 'src/app/modelo/puesto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public datos: Puesto;


  constructor(

    private router: Router,
    private router_url: ActivatedRoute,
    private _service: PublicacionService

  ) { }

  ngOnInit(): void {


    this.router_url.params.subscribe(Params => {


      let id = Params.id;


      this._service.unPuesto(id).subscribe(

        data => {

          this.datos = data.puesto;

          console.log(this.datos);


        }, (err) => {

          this.router.navigate(['poster/publicacion/mipublicaciones']);
        }
      )

    })

  }

}
