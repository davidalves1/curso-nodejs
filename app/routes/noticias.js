module.exports = function(app) {

	app.get('/noticias', (req, res) => {

		const mysql = require('mysql');

		let databaseProfile = {
			host: 'localhost',
			database: 'portal_noticias',
			user: 'root',
			password: ''
		};

		let connection = mysql.createConnection(databaseProfile);

		let query = 'SELECT * FROM noticias';

		connection.query(query, (error, data) => {
			res.send(data);
		});
	
		// res.render('noticias/noticias')
	});
}