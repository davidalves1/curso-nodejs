module.exports = function(app) {

	app.get('/noticias', (req, res) => {

		const connection = app.config.db_connection();
		const Noticias = app.app.models.Noticias; // app.caminhho-ate-o-model

		Noticias.getNoticias(connection, (error, result) => {
			res.render('noticias/noticias', {data: result});
		});
	});
}