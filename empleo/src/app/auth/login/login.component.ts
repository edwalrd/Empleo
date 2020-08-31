import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;

  constructor(

    private fb: FormBuilder,
    private _service: AuthService,
    private _router: Router

  ) { }

  ngOnInit(): void {
    this.renderButton();
  }

  loginData = this.fb.group({

    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    recordar: [false]
  });


  async login() {

    if (this.loginData.get('recordar').value) {

      await localStorage.setItem('email', this.loginData.get('email').value);

    } else {

      await localStorage.removeItem('email');

    }

    this._service.login(this.loginData.value).subscribe(

      resp => {

        this._router.navigate(['/poster']);

      }, err => {

        swal("Oh noes!", err.error.msg, "error");

      }
    )



  }

  campoNoValido(campo: string): boolean {

    const validaciones = [
      this.loginData.get(campo).invalid,
      this.loginData.get(campo).dirty,
      this.loginData.get(campo).touched,
    ]

    if (validaciones[0] && (validaciones[1] || validaciones[2]) && this.loginData) {
      return true;
    } else {
      return false;
    }

  }


  // google

  startApp() {
    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '166181535522-a12co9b0e310ue7vr5qfkgjtgbrgh5fh.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',

      });

      this.attachSignin(document.getElementById('my-signin2'));
    });
  };

  attachSignin(element) {



    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        const id_token = googleUser.getAuthResponse().id_token;

        console.log(id_token);

        this._service.loginGoogle(id_token)
          .subscribe(

            reps => {

              this._router.navigate(['/poster']);

            })


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }


  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark'
    });

    this.startApp();
  }




}


// onSuccess(googleUser) {
//   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//   var id_token = googleUser.getAuthResponse().id_token;
//   console.log(id_token);

// }
//  onFailure(error) {
//   console.log(error);
// }