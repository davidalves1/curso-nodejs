module.exports = function(app) {
	app.get('/add_noticia', (require, response) => {
		response.render('admin/add_noticia')
	});
}