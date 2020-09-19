const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puestoSchema = new Schema({

    empresa: {

        type: String,
        required: true
    },
    ubicacion: {

        type: String
    },
    paginaweb: {

        type: String
    },
    actividad: {

        type: String,
        required: true
    },
    logo: {

        type: String
    },
    horario: {

        type: String
    },
    nombre: {

        type: String
    },
    area: {

    },
    vacante: {

        type: Number
    },
    descripcion: {

        type: String,
        required: true
    },
    requisito: {

        type: String,
        required: true

    },
    academico: {

        type: String

    },
   
    experiencia: {

        type: String,
        required: true

    },
    edad: {

        type: String

    },
    sexo: {

        type: String,
        required: true

    },

    contrato: {

        type: String,
        required: true
    },

    salario: {

        type: String,
        default: 'En entrevista'
    },

    modalidad: {

        type: String

    },

    jornada: {

        type: String,
        required: true

    },

    horarioT: {

        type: String,
        required: true
    },
    
    fecha: {
        type: Date,
        default: new Date()
    }


});

const puesto = mongoose.model('Puestos', puestoSchema);

module.exports = puesto;