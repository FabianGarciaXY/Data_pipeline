const Vehicle = require('../models/vehicles.model');

/*
 * This module contains the callback functions that will be executed when the endpoints related to vehicles are requested. 

 * For each Function:
 * 
 * @Description: The objective is to handle the requests made to each enpoint.
 * @param { req } is the object that holds the request data.
 * @param { res } is the object through which the requests will be answered.
 * @returns { JSON Object } will return the response with the data obtained from the database.
*/


// Obtain available units.
const getAvailableVehicles = async (req, res) => {
	try {
		// The database is queried asynchronously for available units.
		const availableVehicles = await Vehicle.findAll({
			where: {
				trip_start_date: 20200428
			}
		});
		return res.status(200).json(availableVehicles);
	} catch (err) {
		return res.status(500).json(err);
	}
};


// Querying the location of a unit given its id.
const getVehicleLocationById = async (req, res) => {
	try {
		// We pass the Id as a parameter and query the database.
		const id = req.params.id;
		const vehicle = await Vehicle.findOne({
			attributes: ['vehicle_id', 'delegation', 'address'],
			where: {
				vehicle_id: id
			}
		});
		return res.status(200).json(vehicle);
	} catch (err) {
		return res.status(500).json(err);
	}
};


// Exporting functions
module.exports = {
	getAvailableVehicles,
	getVehicleLocationById
};