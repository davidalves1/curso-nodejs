'use strict';

const app = require('./config/server');

const home = require('./app/routes/home');
home(app);

const noticias = require('./app/routes/noticias');
noticias(app);

const add_noticia = require('./app/routes/add_noticia');
add_noticia(app);

app.listen(3000, () => {
	console.log('Server listen on port 3000');
});