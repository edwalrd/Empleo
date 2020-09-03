
export class Puesto {


    constructor(

        //Datos de la compañía

        public empresa: string,
        public ubicacion: string,
        public paginaweb: string,
        public actividad: string,
        public logo: string,
        public horario: string,

        ///Descripción del Puesto

        public nombre: string,
        public area: string,
        public vacante: number,
        public descripcion: string,

        // Requisitos del puesto

        public requisito: string,
        public academico: string,
        public experiencia: number,
        public edad: string,
        public sexo: string,

        // Jornada y Salario

        public contrato: string,
        public salario: string,
        public modalidad: string,
        public  jornada: string,
        public horarioT: string,
        public fecha: Date,


    ) { }



}
