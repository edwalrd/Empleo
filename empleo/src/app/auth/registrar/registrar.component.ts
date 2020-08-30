import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private fb: FormBuilder, private _service: AuthService) { }

  ngOnInit(): void {

  }

  registrar = this.fb.group({

    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });


  campoNoValido(campo: string): boolean {

    const validaciones = [
      this.registrar.get(campo).invalid,
      this.registrar.get(campo).dirty,
      this.registrar.get(campo).touched,
    ]

    if (validaciones[0] && (validaciones[1] || validaciones[2]) && this.registrar) {
      return true;
    } else {
      return false;
    }

  }

  guardar() {

    this._service.registrar(this.registrar.value).subscribe(

      resp => { 

        console.log(resp);
        
      }


    ) , (err) =>{

      console.log(err);
      
    }

    console.log(this.registrar.value);


  }

}
