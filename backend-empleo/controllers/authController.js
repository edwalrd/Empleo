'user strict'

const validator = require('validator');
const Usuario = require('../model/usuario');

const generarJWT = require('../middlewares/generarJWT');

const {googleVerify} = require('../middlewares/googleVerify');

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

    },

    renewnew: async (req , res)=>{

        const id = req.usuario.id;

        const token = generarJWT(id);

        return res.status(200).send({

            status: "OK",
            token
        })

    },

    googleSignIn: async(req, res)=>{

        const token = req.body.token;

        try {
            const { name, email, picture } = await googleVerify(token);

            const usuarios = await Usuario.findOne({ email });
            let usuario;

            if (!usuarios) {

                usuario = new User({

                    email: email,
                    password: "123",
                    google: true

                });
            } else {

                usuario = usuarios;
                usuario.google = true;
            }

            const newuser =  Usuario.create(usuario,async (err, user) => {

                if(err || !user){

                    return res.status(400).send({
                        status:'error',
                        mensaje: "se ha producido un error a guardar este usuario",
                        err
                    })
                }

                return await res.status(200).send({

                    status: "OK",
                    user,
                });

                
            });

        } catch (error) {

            return await res.status(200).send({

                status: "error",
                mensaje: "Token no es correcto",
                error
            });
        }
    }


}



module.exports = controlador;