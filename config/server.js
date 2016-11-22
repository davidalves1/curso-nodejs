'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// O segundo parâmetro indica aonde deve buscar as views. 
// Porém esse caminho parte de onde o express é instanciado.
app.set('views', './app/views');

module.exports = app;