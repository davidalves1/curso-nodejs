module.exports = function(app) {

	app.get('/noticias', (req, res) => {

		const connection = app.config.db_connection();

		let query = 'SELECT * FROM noticias';

		connection.query(query, (error, data) => {
			res.render('noticias/noticias', {noticias: data});
		});
	
	});

	app.post('/noticia', (req, res) => {

		const connection = app.config.db_connection();

		let query = "INSERT INTO noticias (titulo, noticia) VALUES (${req.titulo}, ${req.noticia});"

		connection.query(query, (error, data) => {
			console.log('Noticia inserida com sucesso!');
		});
	});
}