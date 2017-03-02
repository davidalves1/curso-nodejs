'use strict';

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

// O segundo parâmetro indica aonde deve buscar as views. 
// Porém esse caminho parte de onde o express é instanciado.
app.set('views', './app/views');

// Os middlewares devem ser inclu[idos antes do consign
app.use(bodyParser.urlencoded({extended: true}));

consign()
	.include('app/routes')
	.then('config/db_connection.js') // Tem que colocar a extensão, senão o consign confunde com um subdiretório
	.then('app/models')
	.into(app);

module.exports = app;