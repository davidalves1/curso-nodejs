module.exports = function(app) {
	app.get('/', (require, response) => {
		response.render('home/index');
	});
}