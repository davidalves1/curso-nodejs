module.exports = function() {
	this.getNoticias = (connection, callback) => {
		connection.query('SELECT * FROM noticias', callback);
	};

	return this;
}