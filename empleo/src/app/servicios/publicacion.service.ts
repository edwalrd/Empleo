
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Global } from "../servicios/global";

import { Puesto } from ".././/interfaces/puesto";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private url: String;

  constructor(

    private _http: HttpClient

  ) {
    this.url = Global.url;
  }


  get token() {

    return localStorage.getItem('token') || '';
  }

  get header() {
    return {
      headers: {
        'auth-token': this.token
      }
    }
  }

  TodoPuesto(): Observable<any> {

    return this._http.get(this.url + 'puestos', this.header);
  } 
  
  Busqueda(value: any): Observable<any> {

    return this._http.get(this.url + 'puestos/busquedad/'+ value , this.header);

  }

  unPuesto(id): Observable<any> {

    return this._http.get(this.url + 'puestos/' + id, this.header);

  }


  Crear(datos: Puesto): Observable<any> {

    return this._http.post(this.url + "puestos/crear", datos, this.header);

  }

  eliminar(id): Observable<any> {
    return this._http.delete(this.url + "puestos/eliminar/" + id, this.header)
  }


}
