const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puestoSchema = new Schema({

    companía: {

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
    academico: {

        type: String,
        required: true
    },
    experencia: {

        type: String,
        required: true
    },
    ragonedad: {

        type: String,
        required: true
    },
    sexo : {
        
        type: String,
        enum: ['hombre', 'mujer']
    }





});

const puesto = mongoose.model('Puestos', puestoSchema);

module.exports = puesto;