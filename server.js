'use strict';

const express = require('express');
const app = express();

const msg = require('./modulo_teste');

app.set('view engine', 'ejs');

app.get('/', (require, response) => {
	response.render('home/index');
});

app.get('/add_noticia', (require, response) => {
	response.render('admin/add_noticia')
});

app.get('/noticias', (require, response) => {
	response.render('noticias/noticias')
});

app.listen(3000, () => {
	console.log('Server listen on port 3000');
	console.log(msg());
});