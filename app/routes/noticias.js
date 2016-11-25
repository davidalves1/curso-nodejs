const dbConnetction = require('../../config/db_connection');

module.exports = function(app) {

	const connection = dbConnetction();

	app.get('/noticias', (req, res) => {

		let query = 'SELECT * FROM noticias';

		connection.query(query, (error, data) => {
			res.render('noticias/noticias', {noticias: data});
		});
	
	});
}