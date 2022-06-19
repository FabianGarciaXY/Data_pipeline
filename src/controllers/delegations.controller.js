const Vehicle = require('../models/vehicles.model');
const { Op } = require('sequelize');


/*
 * This module contains the callback functions that will be executed when the endpoints for delegations are requested. 
 * The Vehicle model is imported to perform database queries.
 *
 * For each Function:
 *
 * @Description: Handle the requests made to each enpoint.
 * @param { req } is the object that holds the request data.
 * @param { res } is the object through which the requests will be answered.
 * @returns { JSON Object } the JSONresponse with the data obtained from the database.
*/


// Get a list of available delegations.
const getAvailableDelegations = async (req, res) => {
	try {
		// The database is queried for all available delegations
		const availableDelegations = await Vehicle.findAll({
			attributes: ['delegation'],
			group: 'delegation',
			where: {
				delegation: { [Op.not]: null }
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
			attributes: ['vehicle_id', 'delegation', 'vehicle_label', 'current_status', 'trip_id'],
			where: { 
				delegation: delegation,
				trip_id: { [Op.not]: null }
			}
		});	

		if (vehicles.length > 0) {
			return res.status(200).json(vehicles);
		} else {
			return res.status(404).json({ message: 'Delegación sin unidades disponibles'});
		}

	} catch (err) {
		return res.status(500).json({message: 'Delegation not found'});
	}
};



// Exporting the functions for use them in router.
module.exports = {
	getAvailableDelegations,
	getVehiclesByDelegation
};