const Vehicle = require('../models/vehicles.model');

/*
 * This module contains the callback functions that will be executed when the endpoints related to delegations are requested. 
 * Above, the 'Vehicle' model is imported from src/models/model.js to for database queries.
 *
 * For each Function:
 * 
 * @Description: The objective is to handle the requests made to each enpoint.
 * @param { req } is the object that holds the request data.
 * @param { res } is the object through which the requests will be answered.
 * @returns { JSON Object } will return the response with the data obtained from the database.
*/


// Get a list of available delegations.
const getAvailableDelegations = async (req, res) => {
	try {
		// We consulted the database for all available delegations.
		const availableDelegations = await Vehicle.findAll({
			attributes: ['delegation'],
			where: {
				trip_schedule_relationship: 0
			}
		});
		return res.status(200).json(availableDelegations);
	} catch (err) {
		return res.status(500).json(err);
	}
};


// Obtain the list of units within a delegation.
const getVehiclesByDelegation = async (req, res) => {
	try {
		// The delegation is obtained as a request parameter and is used to query all units in that delegation.
		const delegation = req.params.name.toLowerCase();
		const vehicles = await Vehicle.findAll({
			attributes: ['vehicle_id'],
			where: {
				delegation: delegation
			}
		});	
		return res.status(200).json(vehicles);
	} catch (err) {
		return res.status(500).json(err);
	}
};



module.exports = {
	getAvailableDelegations,
	getVehiclesByDelegation
};