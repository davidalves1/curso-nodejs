module.exports = function(app) {
	app.get('/add_noticia', (require, response) => {
		response.render('admin/add_noticia')
	});

	app.get('/noticias/salvar', (require, response) => {
		let noticias = req.body;
		res.send(noticias);
	});
}