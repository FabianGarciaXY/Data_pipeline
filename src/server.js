const routes = require('./routes/router');
const express = require('express');

// Aqui se inicializa el servidor usando el framework express

const port = process.env.PORT || 4000;
const app = express();
app.use(routes);


try {
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
} catch (err) {
	console.log(err);
}


