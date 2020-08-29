const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puestoSchema = new Schema({
    ubicacion:{
        type:String,
        required:true
    },
    posicion:{
        type:String,
        required:true
    },
    empresa:{
        type:String,
        required:true
    }
});

const puesto = mongoose.model('Puestos',puestoSchema);

module.exports = puesto;