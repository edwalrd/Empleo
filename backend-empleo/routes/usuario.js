'use strict'

const express = require('express');

const router = express.Router();

const controlador = require('../controllers/usuarioControllers');

const { roles_verificacion, verificacion } = require('../middlewares/verifyToken');

router.get('/usuario/prueba', verificacion, roles_verificacion('admin','poster') , controlador.prueba);

// Eliminar Usuario
router.delete('/usuario/eliminar/:id' , controlador.eliminar);

// Actualizar Usuario
router.put('/usuario/modificar/:id' , controlador.modificar);



module.exports = router;