const Vehicle = require('../models/vehicles.model');
const axios = require('axios').default;
const geocoder = require('geocoder');


/* This module contains all the functions to handle vehicle data collection and address conversion. */


// @Description: Function to get data from Metrobuses API using Axios library.
// @param { url } the string url from the API.
// @returns [ array] an array of objects containing the vehicles data.
const getVehiclesData = async (url) => {
	let response = await axios.get(url);
	return response['data']['result']['records'];
};


// @Description: Function to get vehicles latitude and longitude.
// @param [ data ] an object containing the data fetched from Metrubuses API through getVehiclesData Function.
// @returns [ array ] an array of latitude and longitude coordinates.
const getCoordinates = (data) => {
	return data.map(vehicle => coords = { lat: vehicle['position_latitude'], long: vehicle['position_longitude'] });
};


// @Description: This Function saves the data fetched with getVehiclesData Function into metrobuses table of Metrobuses_db.
// @param [ vehiclesData ] an array of vehicles object obtained with getVehiclesData Function.
const saveVehiclesData = (vehiclesData) => {
	
	vehiclesData.forEach(async (vehicle) => {
		await Vehicle.create({					// Data is saved in the db using the 'create' method.
			vehicle_id: vehicle['vehicle_id'],
			vehicle_label: vehicle['vehicle_label'],
			current_status: vehicle['vehicle_current_status'],
			latitude: vehicle['position_latitude'],
			longitude: vehicle['position_longitude'],
			position_speed: vehicle['position_speed'],
			position_odometer: vehicle['position_odometer'],
			trip_schedule_relationship: vehicle['trip_schedule_relationship'],
			trip_id: vehicle['trip_id'],
			trip_start_date: vehicle['trip_start_date'],
			trip_route_id: vehicle['trip_route_id']
		});
	});
};


// @Description: Function to get and save the address and specific delegation of each vehicle using Geocoder library.
// @param [ coords ] an array of objects containg coordinates of each vehicle.
// @param { gecoderConfig } an object with the API Key and type of result to use Geocoder library.
const saveVehiclesDelegations = (coords, geocoderConfig) => {

	// Each element of the list is traversed and the geocoder is called to obtain the address.
	coords.forEach((coord) => {
		// A asynchrunous callback is used to handle the response of the geocoder.
		geocoder.reverseGeocode(coord.lat, coord.long, async (err, data) => {
			if (data) {
				let address = data['results'][0]['formatted_address'];
				let addressComponents = address.split(', ');
				let delegation = addressComponents[addressComponents.length - 4].toLowerCase();

				// Using the Vehicle model, the metrobuses table is updated with its corresponding delegations.
				await Vehicle.update({
					address: address,
					delegation: delegation
				}, 
				{
					where: { latitude: coord.lat }
				});
			} else if (err) {
				throw new Error(err)
			}
			},
			geocoderConfig  // Geocoder configuration
		);
	});
};



// Exporting function to use in seed.js module.
module.exports = {
	getVehiclesData,
	getCoordinates,
	saveVehiclesData,
	saveVehiclesDelegations
};