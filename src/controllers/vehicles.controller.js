const Vehicle = require('../models/vehicles.model');
const { Op } = require('sequelize');

/*
 * This module contains the callback functions that will be executed when the endpoints for vehicles are requested. 
 *
 * For each Function:
 * 
 * @Description: Handle the requests made to each enpoint.
 * @param { req } is the object that holds the request data.
 * @param { res } is the object through which the requests will be answered.
 * @returns { JSON Object } will return the response with the data obtained from the database.
*/


// Obtain available units.
const getAvailableVehicles = async (req, res) => {
	try {
		// The database is queried asynchronously for available units.
		const availableVehicles = await Vehicle.findAll({
			attributes: ['vehicle_id', 'vehicle_label', 'position_speed', 'current_status', 'geographic_point',
				'position_odometer', 'trip_schedule_relationship', 'trip_id', 'trip_start_date', 'delegation', 'address'],
			where: {
				trip_start_date: {
					[Op.not]: null
				}
			},
			order: [ 
				['vehicle_id', 'ASC']
			]
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
			attributes: ['vehicle_id', 'delegation', 'geographic_point', 'address'],
			where: {
				vehicle_id: id
			}
		});

		if (vehicle) {
			return res.status(200).json(vehicle);
		} else {
			return res.status(404).json({message: 'Vehicle not found'})
		}

	} catch (err) {
		return res.status(500).json(err);
	}
};


// Exporting functions
module.exports = {
	getAvailableVehicles,
	getVehicleLocationById
};