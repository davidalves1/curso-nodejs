'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (require, response) => {
	response.send('<html><body><h1>Portal de notícias</h1></body></html>');
});

app.get('/tecnologia', (require, response) => {
	response.render('secao/tecnologia')
});

app.listen(3000, () => {
	console.log('Server listen on port 3000');
});