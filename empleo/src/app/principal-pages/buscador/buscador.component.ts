import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  public num : Number;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

  }


  contador() {

  
  }

  buscador = this.fb.group({

    palabra: ['', [Validators.required]],
    area: ['', [Validators.required]],
    anos: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    provincia: ['', [Validators.required]],

  });









}
