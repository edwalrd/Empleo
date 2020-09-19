
export class Puesto {


    constructor(

        //Datos de la compañía

        public _id: String,
        public empresa: String,
        public nombre : String,
        public ubicacion: String,
        public paginaweb: String,
        public actividad: String,
        public logo: String,
        public horario: String,

        ///Descripción del Puesto

      
        public area: String,
        public vacante: Number,
        public descripcion: String,

        // Requisitos del puesto

        public requisito: String,
        public academico: String,
        public experiencia: Number,
        public edad: String,
        public sexo: String,

        // Jornada y Salario

        public contrato: String,
        public salario: String,
        public modalidad: String,
        public jornada: String,
        public horarioT: String,
        public fecha: any,

   


    ) { }



}
