const mysql = require('mysql');

// Passa a função de conexão com o banco de dados para uma constate,
// assim ela não é executada ao iniciar a aplicação
const connMySql = function() {
	return mysql.createConnection({
		host: 'localhost',
		database: 'portal_noticias',
		user: 'root',
		password: ''
	});
}

module.exports = () => {
	return connMySql;
}