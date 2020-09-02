

export class Usuario{

    constructor(


        public nombre: string,
        public apellido: string,
        public email: string,
        public role?: string,
        public google?: string,
        public _id?: string
    ){}
}