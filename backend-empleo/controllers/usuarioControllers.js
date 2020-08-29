'use strict'

const validator = require('validator');
const Usuario = require('../model/usuario');


const controlador = {

    crearUsuario: (req, res) => {

        const params = req.body;

        try {

            var validacionEmail = !validator.isEmpty(params.email);
            var validacionNombre = !validator.isEmpty(params.nombre);
            var validacionApellido = !validator.isEmpty(params.apellido);
            var validacionPassoword = !validator.isEmpty(params.password);

        } catch (error) {

            return res.status(400).send({
                status: "error",
                mesanje: "Faltan datos por enviar"
            });
        }

        if (validacionEmail & validacionNombre & validacionApellido & validacionPassoword == true) {

            Usuario.create(params, (err, usuario) => {

                if(err || !usuario){

                    return res.status(400).send({
                        status: "error",
                        mensaje: "Se ha producido un problema",
                        destalle: err
                    })
                }


                return res.status(200).send({

                status: "Error",
                usuario
                })
            })


        }

    }

}

module.exports = controlador;