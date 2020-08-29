'use strict'

const express = require('express');

const router = express.Router();

const controlador = require('../controllers/authController');

router.post('/auth/registrar', controlador.registrar);

router.post('/auth/login', controlador.login);



module.exports = router;