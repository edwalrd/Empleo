'use strict'

const express = require('express');

const router = express.Router();

const controlador = require('../controllers/authController');

const { roles_verificacion, verificacion } = require('../middlewares/verifyToken');

router.get('/auth/renewnew', verificacion, controlador.renewnew);


router.post('/auth/registrar', controlador.registrar);

router.post('/auth/login', controlador.login);

router.post('/auth/google' , controlador.googleSignIn);






module.exports = router;