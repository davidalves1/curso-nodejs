module.exports = function(app) {

	app.get('/noticia', (req, res) => {

		const connection = app.config.db_connection();

		let query = "SELECT * FROM noticias WHERE id = 2";

		connection.query(query, (error, data) => {
			res.render('noticias/noticia', {data: data});
		});
	});
}