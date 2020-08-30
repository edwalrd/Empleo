import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Global } from "../servicios/global";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { registrar } from '../interfaces/registrar';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: String;

  constructor(private _http: HttpClient) {

    this.url = Global.url;
  }

  guardarLocalStorage(token: string, usuario: any) {

    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

  }

  registrar(datos: registrar): Observable<any> {

    return this._http.post<any>(this.url + 'auth/registrar', datos).
      pipe(
        tap((resp: any) => {
          this.guardarLocalStorage(resp.token, resp.usuario);
        })
      )
  }



}
