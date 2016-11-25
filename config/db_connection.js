const mysql = require('mysql');

module.exports = () => {
	return mysql.createConnection({
		host: 'localhost',
		database: 'portal_noticias',
		user: 'root',
		password: ''
	});
}