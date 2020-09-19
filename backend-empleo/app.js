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
const auth = require('./routes/auth');
const drive = require('./routes/drive');

app.use('/api', puesto, usuario, auth, drive);


module.exports = app;