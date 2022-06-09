const Sequelize = require('sequelize');


const sequelize = new Sequelize(
	process.env.PGDATABASE,
	process.env.PGUSE,
	process.env.PGPASSWORD,
	{
		host: process.env.PGHOST,
		dialect: 'postres'
	}
);


module.exports = sequelize;