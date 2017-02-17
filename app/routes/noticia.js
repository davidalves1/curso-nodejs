module.exports = function(app) {

	app.get('/noticia', (req, res) => {

		const connection = app.config.db_connection();
		const Noticias = app.app.models.Noticias;

		Noticias.getNoticia(connection, (error, result) => {
			res.render('noticias/noticia', {data: result});
		});
	});
}