'use strict'

const jwt = require('jsonwebtoken');
const Usuario = require('../model/usuario');


exports.verificacion = async function (req, res, next) {

    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Access Denied');

    try {

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);

        req.usuario = await Usuario.findById(verified.id);

        next();

    } catch (error) {

        res.status(400).send('Invalid Token');
    }

}

exports.roles_verificacion = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.usuario.role)) {

            return next(

                res.status(403).send('No esta autorisado para estar aqui')
            );

        }
        console.log(roles);
        next();

    }

}
