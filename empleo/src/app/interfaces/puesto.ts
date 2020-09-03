
export interface Puesto {

    //Datos de la compañía

    companía: string,
    ubicacion: string,
    paginaweb: string,
    actividad: string,
    logo: string,
    horario: string,

    ///Descripción del Puesto

    nombre: string,
    area: string,
    vacante: number,
    descripcion: string


    // Requisitos del puesto

    requisito: string,
    academico: string,
    experiencia: number,
    edad: string,
    sexo: string,

    // Jornada y Salario

    contrato: string,
    salario: string,
    modalidad: string,
    jornada: string,
    horarioT: string
}
