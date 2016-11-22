'use strict';

const app = require('./config/server');

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
});