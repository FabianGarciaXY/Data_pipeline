const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Metrobuses = db.define('metrobuses', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	vehicle_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	current_status: {
		type: DataTypes.SMALLINT,
		allowNull: false
	},
	latitude: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	longitude: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	geographic_point: {
		type: DataTypes.STRING,
		allowNull: false
	},

});


module.exports = Metrobuses;