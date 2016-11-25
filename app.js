'use strict';

const app = require('./config/server');

app.listen(3000, () => {
	console.log('Server listen on port 3000');
});