import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(

    private fb: FormBuilder,
    private _service: AuthService,
    private _router: Router

  ) { }

  ngOnInit(): void {
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
}

