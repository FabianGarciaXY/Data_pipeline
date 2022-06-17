const Sequelize = require('sequelize');

/* This module is for configuration and connection to postgres metrobuses_db database using Sequelize. */

// The connection to the database is established using environment variables from docker-compose.yml
const sequelize = new Sequelize(
	process.env.PGDATABASE,
	process.env.PGUSER,
	process.env.PGPASSWORD,
	{
		host: process.env.PGHOST,
		dialect: 'postgres'
	}
);


// The connection is exported.
module.exports = sequelize;