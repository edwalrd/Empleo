'use strict'

const validator = require('validator');
const Usuario = require('../model/usuario');


const controlador = {

    prueba: (req, res) => {

        const usuario = req.usuario;

        return res.status(200).send({

            status: "OK",
            mensaje: "prueba",
            usuario
        });
    },

    crearUsuario: async (req, res) => {

        const params = req.body;

        try {

            var validacionNombre = !validator.isEmpty(params.nombre);
            var validacionApellido = !validator.isEmpty(params.apellido);
            var validacionEmail = !validator.isEmpty(params.email);
            var validacionPassoword = !validator.isEmpty(params.password);

        } catch (error) {

            return res.status(400).send({
                status: "error",
                mesanje: "Faltan datos por enviar"
            });
        }

        if (validacionNombre && validacionApellido && validacionEmail && validacionPassoword == true) {

            const usuario = await Usuario.findOne({ email: params.email });


            if (usuario) return res.status(400).send({ mesanje: "Este usuario ya existe" });


            await Usuario.create(params, (err, usuario) => {

                if (!usuario || err) {

                    return res.status(400).send({
                        status: "error",
                        err
                    });
                }

                return res.status(200).send({
                    status: "OK",
                    usuario
                })

            });

        } else {
            return res.status(404).send({
                mesanje: 'Los datos no son validos'
            });
        }





    },

    eliminar: async (req, res) => {

        const user_id = req.params.id;

        Usuario.findByIdAndDelete({ _id: user_id }, (err, usuario) => {

            if (!usuario) {

                return res.status(400).send({

                    status: "erro",
                    mensaje: " No existe este cliente"
                })
            }
            if (err) {

                return res.status(400).send({

                    status: "erro",
                    mensaje: "Se ha producido un error",
                    err
                })
            }

            return res.status(200).send({

                status: "OK",
                mensaje: "Proceso realizado exitosamente ",
                usuario
            })


        })

    },

    modificar: async (req, res) => {

        const user_id = req.params.id;
        const params = req.body;

        try {

            var validacionNombre = !validator.isEmpty(params.nombre);
            var validacionApellido = !validator.isEmpty(params.apellido);
            var validacionEmail = !validator.isEmpty(params.email);
            var validacionPassoword = !validator.isEmpty(params.password);

        } catch (error) {

            return res.status(400).send({
                status: "error",
                mesanje: "Faltan datos por enviar"
            });
        }

        if (validacionNombre && validacionApellido && validacionEmail && validacionPassoword == true) {

            await Usuario.findByIdAndUpdate({ _id: user_id }, params, { new: true }, (err, user) => {

                if (err) {
                    return res.status(400).send({
                        status: "error",
                        mesanje: "Se ha producido un problema",
                        err
                    });
                }

                if (!user) {

                    return res.status(404).send({

                        status: 'error',
                        mesanje: 'No existe el cliente'
                    });
                }

                return res.status(200).send({

                    status: 'OK',
                    user
                });


            });

        } else {

            return res.status(404).send({

                status: 'error',
                mesanje: 'La validación no es correcta'
            });

        }

    }


}

module.exports = controlador;