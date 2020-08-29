'user strict'

const validator = require('validator');
const Usuario = require('../model/usuario');

const generarJWT = require('../middlewares/generarJWT');

const controlador = {


    registrar: async (req, res) => {

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

            const emailExist = await Usuario.findOne({ email: params.email });

            if (emailExist) return res.status(400).send({ mesanje: "Este usuario ya existe" });

            await Usuario.create(params, (err, usuario) => {

                if (err || !usuario) {

                    return res.status(400).send({
                        status: "error",
                        mensaje: "Se ha producido un problema",
                        destalle: err
                    })
                }

                const token = generarJWT(usuario._id);

                return res.status(200).send({
                    status: "Bien",
                    token: token,
                    usuario
                })
            });


        } else {
            return res.status(404).send({
                mesanje: 'Los datos no son validos'
            });
        }

    },

    login: async (req, res) => {

        const params = req.body;

        try {
            var emailValidator = !validator.isEmpty(params.email);
            var passwordValidator = !validator.isEmpty(params.password);

        } catch (error) {

            return res.status(400).send({
                status: "error",
                mesanje: "Faltan datos por enviar"
            });
        }
        if (emailValidator && passwordValidator == true) {


            const user = await Usuario.findOne({ email: params.email });

            if (!user) return res.status(400).send({ status: "error", mesanje: "Este usuario no existe" });

            const validPass = await user.comparaPassword(params.password);

            if (!validPass) return res.status(400).send({ status: "error", mensanje: "Esta contrasena es incorrecta" });

            const token = generarJWT(user._id);

            res.header('auth-token', token).send(
                {
                    status: "OK",
                    token
                }
            );
        }

    }


}



module.exports = controlador;