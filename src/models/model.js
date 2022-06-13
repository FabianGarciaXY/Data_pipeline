const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Vehicle = db.define('metrobuses', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	vehicle_id: DataTypes.INTEGER,
	vehicle_label: DataTypes.INTEGER,
	current_status: DataTypes.SMALLINT,
	latitude: DataTypes.DECIMAL,
	longitude: DataTypes.DECIMAL,
	position_speed: DataTypes.INTEGER,
	position_odometer: DataTypes.INTEGER,
	trip_schedule_relationship: DataTypes.INTEGER,
	trip_id: DataTypes.INTEGER,
	trip_start_date: DataTypes.STRING,
	trip_route_id: DataTypes.INTEGER,
	adress: DataTypes.STRING,
	delegation: DataTypes.STRING
});


module.exports = Vehicle;