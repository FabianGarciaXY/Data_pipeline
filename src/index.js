const express = require('express');
const routes = require('./routes/router');
const getData = require('./utils/reader');
const sequelize = require('./utils/database');


/* Here the server is initialized by importing the necessary libraries and modules: express, sequelize and routes.  */


// The server port is defined, and express is executed.
const port = process.env.PORT || 4000;
const app = express();
app.use(routes);


// A self-executing asynchronous function is declared and executed to initialize the services.
(async () => {
	try {
		// The sequelize sync method is executed to perform the database migration.
		await sequelize.sync({force: true});
		getData();

		app.listen(port, () => console.log(`Server running on port`, port));
	} catch (err) {
		console.log(err);
	}
})();