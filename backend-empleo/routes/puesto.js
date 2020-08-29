'use strict'

const express = require('express');

const router = express.Router();


const puestoController = require('../controllers/puestoController');


//rutas puestos
router.get('/puestos',puestoController.getPuestos),
router.get('/puestos/:id',puestoController.getPuesto),

router.post('/puestos',puestoController.createPuestos),

router.put('/puestos/:id',puestoController.updatePuesto),

router.delete('/puestos/:id',puestoController.deletePuesto),


module.exports = router;