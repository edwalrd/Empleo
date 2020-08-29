'use strict'

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const puesto = require('./routes/puesto');
const usuario = require('./routes/usuario');

app.use('/api',puesto,usuario);


module.exports = app;