const { DataTypes } = require('sequelize');
const db = require('../utils/database');


/*
 * In this module we define the data model to be stored in postgres using the Sequelize ORM.
 * The data obtained from the metrobuses API is kept and 3 more fields are added: 'id', 'address' and 'delegation'.
*/


const Vehicle = db.define('metrobuses', {
	// Each of the fields and their data type are defined.
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
	trip_start_date: DataTypes.INTEGER,
	trip_route_id: DataTypes.INTEGER,
	address: DataTypes.STRING,
	delegation: DataTypes.STRING
});


// It is exported for use in other modules such as the controller.
module.exports = Vehicle;