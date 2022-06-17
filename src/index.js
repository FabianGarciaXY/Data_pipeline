const express = require('express');
const routes = require('./routes/router');
const sequelize = require('./utils/database');
const { getData, geocoderConfig } = require('./utils/seed');


/* Here the server is initialized by importing the necessary libraries and modules: express, sequelize and routes.  */


// The Express application is executed and the routes imported from the router.js module are used.
const app = express();
app.use(routes);


// A self-executing asynchronous function is declared and executed to initialize the services.
(async function main() {
	try {
		// The sequelize sync method is executed to perform the database migration.
		// The getData() function initializes the fetching and saving of data in the database.
		await sequelize.sync({force: true});
		await getData(process.env.VEHICLESAPI, geocoderConfig); 

		app.listen(process.env.PORT, () => console.log('Server running on port', 4000));
	} catch (err) {
		console.log(err);
	}
})();