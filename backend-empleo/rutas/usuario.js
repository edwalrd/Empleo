'use strict'

const express = require('express');

const router = express.Router();

const controlador = require('../controladores/usuario');

router.get('/usuario/prueba' , controlador.prueba);


module.exports = router;