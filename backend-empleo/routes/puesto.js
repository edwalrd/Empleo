'use strict'

const express = require('express');

const router = express.Router();


const puestoController = require('../controllers/puestoController');

const { roles_verificacion, verificacion } = require('../middlewares/verifyToken');

//rutas puestos
router.get('/puestos',  puestoController.getPuestos);

router.get('/puestos/:id', puestoController.getOnePuesto);

router.get('/puestos/busquedad/:search?', puestoController.busquedaPuesto);

router.post('/puestos/crear', verificacion , puestoController.createPuestos);

router.put('/puestos/editar/:id', puestoController.updatePuesto);

router.delete('/puestos/eliminar/:id', puestoController.deletePuesto);


module.exports = router;