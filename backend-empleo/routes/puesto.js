'use strict'

const express = require('express');

const router = express.Router();


const puestoController = require('../controllers/puestoController');

const { roles_verificacion, verificacion } = require('../middlewares/verifyToken');

//rutas puestos
router.get('/puestos', puestoController.getPuestos),

    router.get('/puestos/:id' , puestoController.getPuesto),

    router.post('/puestos', verificacion, roles_verificacion('admin , poster') , puestoController.createPuestos),

    router.put('/puestos/:id', verificacion, roles_verificacion('admin , poster') , puestoController.updatePuesto),

    router.delete('/puestos/:id', verificacion, roles_verificacion('admin , poster') , puestoController.deletePuesto),


    module.exports = router;