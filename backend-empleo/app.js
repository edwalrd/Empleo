'use strict'

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const routes = require('./routes/index');

app.use('/api', routes);


module.exports = app;