'use strict'

const { Schema, model } = require("mongoose");

const bcrypt = require('bcrypt');

const usuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },
    email: {

        type: String,
        Unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user', 'poster']
    },
    google: {
        type: Boolean,
        default: false
    },
    fecha: {
        type: Date,
        default: Date.now("DD-MM-YYYY")
    }


});

usuarioSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {

        next();
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});



module.exports = model("Usuario", usuarioSchema);

