import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Select, Selectnum } from '../../../../../interfaces/select';

import { PublicacionService } from "../../../../../servicios/publicacion.service";

import { areas } from '../../../../../class/areas'
import { academico } from '../../../../../class/academico'
import { modalida  } from '../../../../../class/modalidad'

import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public area: any[] = [];
  public areas = new areas();

  public academico: any[] = [];
  public edad: any[] = [];
  public academicos = new academico();

  public modalida: any[] = [];
  public modalidas = new modalida();

  constructor(
    private fb: FormBuilder,
    private _service: PublicacionService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.area = this.areas.areas;

    this.academico = this.academicos.acadamico;

    this.edad = this.academicos.edad;

    this.modalida = this.modalidas.modalida;

  }


  public puestoform = this.fb.group({

    empresa: ['', Validators.required],
    ubicacion: [''],
    paginaweb: [''],
    actividad: ['', Validators.required],
    logo: [''],
    horario: ['', Validators.required],

    nombre: ['', Validators.required],
    area: [this.area[0]],
    vacante: [1],
    descripcion: ['', Validators.required],

    requisito: ['', Validators.required],
    academico: [this.academico[0]],
    experiencia: [''],
    edad: [this.edad[0]],
    sexo: [''],
    contrato: [''],
    salario: [''],
    modalidad: [this.modalida[0]],
    jornada: ['', Validators.required],
    horarioT: ['', Validators.required]

  });



  campoNoValido(campo): boolean {

    const validaciones = [
      this.puestoform.get(campo).invalid,
      this.puestoform.get(campo).dirty,
      this.puestoform.get(campo).touched,
    ]

    if (validaciones[0] && (validaciones[1] || validaciones[2]) && this.puestoform) {
      return true;
    } else {
      return false;
    }


  }

  crear() {

    this._service.Crear(this.puestoform.value).subscribe(

      reps => {

        if (reps.status = "OK") {

          swal("Good job!", "Se ha guardado correctamente", "success");

          this.router.navigate(['poster/publicacion/mipublicaciones']);

        }
        else {
          swal("Good job!", "Ha occurrido un error ha guardar la publicacion", "error");
        }
      },
      error => {

        swal("Good job!", "Ha occurrido un error", "error");


      }

    )

  }


}

