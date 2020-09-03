import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Select, Selectnum } from '../../../../../interfaces/select';

import { PublicacionService } from "../../../../../servicios/publicacion.service";

import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {



  constructor(
    private fb: FormBuilder,
    private _service: PublicacionService,
    private router: Router

  ) { }

  ngOnInit(): void {

  }

  academico: Select[] = [
    { value: 'Bachillerato', viewValue: 'Bachillerato' },
    { value: 'universitario', viewValue: 'universitario' },
    { value: 'diplomado', viewValue: 'diplomado' },
    { value: 'licenciatura', viewValue: 'licenciatura' },
    { value: 'posgrado', viewValue: 'posgrado' },
    { value: 'maestria', viewValue: 'maestria' },
    { value: 'grado', viewValue: 'grado' },
  ];

  num: Selectnum[] = [

    { num: 1, numvalue: 1 },
    { num: 2, numvalue: 2 },
    { num: 3, numvalue: 3 },
    { num: 4, numvalue: 4 },
    { num: 5, numvalue: 5 },
    { num: 6, numvalue: 6 },
    { num: 7, numvalue: 7 },
    { num: 8, numvalue: 8 },
    { num: 9, numvalue: 9 },
    { num: 10, numvalue: 10 }
  ];


  public edad: Select[] = [
    { value: '18-25', viewValue: '18-25' },
    { value: '25-45', viewValue: '25-45' },
    { value: '45-60', viewValue: '45-60' }

  ]

  modalidad: Select[] = [
    { value: 'Precencial', viewValue: 'Precencial' },
    { value: 'Semi Presencial', viewValue: 'Semi Presencial' },
    { value: 'Virtual', viewValue: 'Virtual' },
  ]



  public areas: Select[] = [
    { value: 'Administración', viewValue: 'Administración' },
    { value: 'Aeronáutica', viewValue: 'Aeronáutica' },
    { value: 'Agrimensura', viewValue: 'Agrimensura' },
    { value: 'Agronomía, Agricultura', viewValue: 'Agronomía, Agricultura' },
    { value: 'Arquitectura, Construcción', viewValue: 'Arquitectura, Construcción' },
    { value: 'Atención al Cliente', viewValue: 'Atención al Cliente' },
    { value: 'Banca, Servicios Financieros', viewValue: 'Banca, Servicios Financieros' },
    { value: 'Biblioteconomía, Documentación', viewValue: 'Biblioteconomía, Documentación' },
    { value: 'Construcción', viewValue: 'Construcción' },
    { value: 'Ciencias Económicas', viewValue: 'Ciencias Económicas' },
    { value: 'Ciencias Empresariales', viewValue: 'Ciencias Empresariales' },
    { value: 'Ciencias Sociales', viewValue: 'Ciencias Sociales' },
    { value: 'Compras', viewValue: 'Compras' },
    { value: 'Comunicación, Publicidad, Medios', viewValue: 'Comunicación, Publicidad, Medios' },
    { value: 'Consultoría, Análisis', viewValue: 'Consultoría, Análisis' },
    { value: 'Contabilidad', viewValue: 'Contabilidad' },
    { value: 'Creatividad, Diseño, Multimedia', viewValue: 'Creatividad, Diseño, Multimedia' },
    { value: 'Cuidado de Mayores y Dependientes', viewValue: 'Cuidado de Mayores y Dependientes' },
    { value: 'Cuidado de Niños', viewValue: 'Cuidado de Niños' },
    { value: 'Derecho', viewValue: 'Derecho' },
    { value: 'Diseño Industrial', viewValue: 'Diseño Industrial' },
    { value: 'Electricidad, Electrónica', viewValue: 'Electricidad, Electrónica' },
    { value: 'Farmacia', viewValue: 'Farmacia' },
    { value: 'Finanzas', viewValue: 'Finanzas' },
    { value: 'Física', viewValue: 'Física' },
    { value: 'Formación, Docencia', viewValue: 'Formación, Docencia' },
    { value: 'Gestión, Alta Dirección', viewValue: 'Gestión, Alta Dirección' },
    { value: 'Impuestos', viewValue: 'Impuestos' },
    { value: 'Industria, Producción, Calidad', viewValue: 'Industria, Producción, Calidad' },
    { value: 'Informática, Sistemas, Internet', viewValue: 'Informática, Sistemas, Internet' },
    { value: 'Ingeniería Civil, Estructural', viewValue: 'Ingeniería Civil, Estructural' },
    { value: 'Ingeniería Eléctrica', viewValue: 'Ingeniería Eléctrica' },
    { value: 'Ingeniería Electromecánica', viewValue: 'Ingeniería Electromecánica' },
    { value: 'Ingeniería Electrónica', viewValue: 'Ingeniería Electrónica' },
    { value: 'Ingeniería Industrial', viewValue: 'Ingeniería Industrial' },
    { value: 'Ingeniería Mecánica', viewValue: 'Ingeniería Mecánica' },
    { value: 'Ingeniería Mecatrónica', viewValue: 'Ingeniería Mecatrónica' },
    { value: 'Ingeniería Montes, Caminos', viewValue: 'Ingeniería Montes, Caminos' },
    { value: 'Ingeniería Química', viewValue: 'Ingeniería Química' },
    { value: 'Ingeniería Sanitaria, Ambiental', viewValue: 'Ingeniería Sanitaria, Ambiental' },
    { value: 'Ingeniería Sistemas', viewValue: 'Ingeniería Sistemas' },
    { value: 'Ingeniería Telecomunicaciones', viewValue: 'Ingeniería Telecomunicaciones' },
    { value: 'Investigación de Mercado', viewValue: 'Investigación de Mercado' },
    { value: 'Investigación y Desarrollo', viewValue: 'Investigación y Desarrollo' },
    { value: 'Letras, Humanidades, Filosofía', viewValue: 'Letras, Humanidades, Filosofía' },
    { value: 'Logística, Distribución', viewValue: 'Logística, Distribución' },
    { value: 'Marketing', viewValue: 'Marketing' },
    { value: 'Medio Ambiente', viewValue: 'Medio Ambiente' },
    { value: 'Oficios diversos', viewValue: 'Oficios diversos' },
    { value: 'Prevención de Riesgos', viewValue: 'Prevención de Riesgos' },
    { value: 'Psicología', viewValue: 'Psicología' },
    { value: 'Química, Biología', viewValue: 'Química, Biología' },
    { value: 'Recepción, Centralita', viewValue: 'Recepción, Centralita' },
    { value: 'Recursos Humanos', viewValue: 'Recursos Humanos' },
    { value: 'Salud, Medicina', viewValue: 'Salud, Medicina' },
    { value: 'Secretariado', viewValue: 'Secretariado' },
    { value: 'Seguridad y Salud Ocupacional', viewValue: 'Seguridad y Salud Ocupacional' },
    { value: 'Seguros', viewValue: 'Seguros' },
    { value: 'Servicio Doméstico', viewValue: 'Servicio Doméstico' },
    { value: 'Telecomunicaciones', viewValue: 'Telecomunicaciones' },
    { value: 'Telemarketing', viewValue: 'Telemarketing' },
    { value: 'Trabajo Social', viewValue: 'Trabajo Social' },
    { value: 'Traducción, Interpretación, Idiomas', viewValue: 'Traducción, Interpretación, Idiomas' },
    { value: 'Transporte', viewValue: 'Transporte' },
    { value: 'Turismo, Hostelería', viewValue: 'Turismo, Hostelería' },
    { value: 'Ventas', viewValue: 'Ventas' }

  ];


  public puestoform = this.fb.group({

    empresa: ['', Validators.required],
    ubicacion: [''],
    paginaweb: [''],
    actividad: ['', Validators.required],
    logo: [''],
    horario: ['', Validators.required],

    nombre: ['', Validators.required],
    area: [this.areas[0].value],
    vacante: [this.num[0].numvalue],
    descripcion: ['', Validators.required],

    requisito: ['', Validators.required],
    academico: [this.academico[0].value],
    experiencia: [''],
    edad: [this.edad[0].value],
    sexo: [''],
    contrato: [''],
    salario: [''],
    modalidad: [this.modalidad[0].value],
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

        swal("Good job!", "Ha occurrido un error" , "error");

        
      }

    )

  }


}

