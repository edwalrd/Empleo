'use strict'

const express = require('express');

const router = express.Router();

const controlador = require('../controllers/drive');

// const { roles_verificacion, verificacion } = require('../middlewares/verifyToken');

router.get('/drive/saludo',controlador.saludo);


module.exports = router;