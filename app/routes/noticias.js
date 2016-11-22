module.exports = function(app) {
	app.get('/noticias', (require, response) => {
		response.render('noticias/noticias')
	});
}