const Vehicle = require('../models/model');


/*
 * Brief Description:
 *
 * This module contains the callback functions that will be executed when the corresponding endopoints are requested. 
 * Above, the 'Vehicle' model is imported from src/models/model.js to perform database queries.
 * 
 *  
 * For each Function:
 * 
 * @Description: The objective is to handle the requests made to each enpoint.
 * @param { req } is the object that holds the request data.
 * @param { res } is the object through which the requests will be answered.
 * @returns { JSON Object } will return the response with the data obtained from the database.
*/


// Root route.
const root = (req, res) => {
	try {
		return res.status(200).json({ 'message': 'Hi world!'});
	} catch (err) {
		return res.status(500).json(err);
	}
};


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


// Get a list of available delegations.
const getAvailableTowns = async (req, res) => {
	try {
		// We consulted the database for all available delegations.
		const allTowns = await Vehicle.findAll({
			attributes: ['delegation'],
			where: {
				trip_schedule_relationship: 0 // CHECK THIS!
			}
		});
		return res.status(200).json(allTowns);
	} catch (err) {
		return res.status(500).json(err);
	}
};


// Obtain the list of units within a delegation.
const getVehiclesByTown = async (req, res) => {
	try {
		// The delegation is obtained as a request parameter and is used to query all units in that delegation.
		const delegation = req.params.name;
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



// Export of all functions
module.exports = {
	root,
	getAvailableVehicles,
	getVehicleLocationById,
	getAvailableTowns,
	getVehiclesByTown
};