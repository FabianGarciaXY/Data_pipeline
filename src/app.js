const express = require('express');
const routes = require('./routes/router');
const sequelize = require('./utils/database');
const Metrobuses = require('./models/model');

// Aqui se inicializa el servidor usando el framework express

const port = process.env.PORT || 4000;
const app = express();

app.use(routes);
 
(async () => {
	try {
		await sequelize.sync(
			{force: false}
		);

		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
})();