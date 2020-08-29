'use strict'

const express = require('express');

const router = express.Router();

const controlador = require('../controllers/usuarioControllers');
const usuarioControllers = require('../controllers/puestoController');


//rutas puestos
router.get('/puestos',usuarioControllers.getPuestos),
router.get('/puestos/:id',usuarioControllers.getPuesto),

router.post('/puestos',usuarioControllers.createPuestos),

router.put('/puestos/:id',usuarioControllers.updatePuesto),

router.delete('/puestos/:id',usuarioControllers.deletePuesto),


module.exports = router;