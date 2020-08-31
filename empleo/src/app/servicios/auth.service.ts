import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Global } from "../servicios/global";

import { Observable, of } from 'rxjs';

import { tap, catchError, map } from 'rxjs/operators';

import { registrar } from '../interfaces/registrar';

import { login } from '../interfaces/login';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: String;

  constructor(private _http: HttpClient) {

    this.url = Global.url;
  }

  get token() {

    return localStorage.getItem('token') || '';
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
  };

  login(data: login): Observable<any> {

    return this._http.post<any>(this.url + 'auth/login', data)
      .pipe(
        tap((resp: any) => {

          this.guardarLocalStorage(resp.token, resp.usuario);

        }))

  }

  loginGoogle(token) {

    return this._http.post<any>(this.url + '/auth/google', { token })
      .pipe(
        tap((resp: any) => {

          this.guardarLocalStorage(resp.token, resp.user);

        }));
  }

  validarToken(): Observable<boolean> {

    return this._http.get(this.url + 'auth/renewnew', {

      headers: {
        'auth-token': this.token
      }
    }).pipe(

      map((resp: any) => {

        localStorage.setItem('token', resp.token);

        return true

      }), catchError(error => of(false))

    );

  }

  logout(){
  localStorage.removeItem('token');
  }



}
