import { Injectable, NgZone } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Global } from "../servicios/global";

import { Observable, of } from 'rxjs';

import { tap, catchError, map } from 'rxjs/operators';

import { registrar } from '../interfaces/registrar';

import { login } from '../interfaces/login';
import { Router } from '@angular/router';

import { Usuario } from "../modelo/usuario";

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: String;
  public auth2: any;

  public person : Usuario;

  constructor(

    private _http: HttpClient,
    private router: Router,
    private ngZone: NgZone

  ) {

    this.url = Global.url;

    this.googleinit();
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


  googleinit() {

    return new Promise(resolve => {
      gapi.load('auth2', () => {

        this.auth2 = gapi.auth2.init({

          client_id: '166181535522-a12co9b0e310ue7vr5qfkgjtgbrgh5fh.apps.googleusercontent.com',

          cookiepolicy: 'single_host_origin',

        });
        resolve();
      })
    });
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

        const {nombre , apellido ,email, role, google , _id } = resp.usuario;

        this.person = new Usuario (nombre, apellido , email , role, google ,_id);

        localStorage.setItem('token', resp.token);

        return true

      }), catchError(error => of(false))

    );

  }

  logout() {

    localStorage.removeItem('token');

    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {

        this.router.navigateByUrl('/login');

      })


    });

  }



}
