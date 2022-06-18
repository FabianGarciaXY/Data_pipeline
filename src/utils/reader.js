const Vehicle = require('../models/vehicles.model');
const axios = require('axios').default;
const geocoder = require('geocoder');


/* 
 * This module contains all the functions to handle vehicle data collection 
 * and address conversion that will be used in seed.js module. 
*/


// @Description: Asynchronous function to fetch data from Metrobuses API using Axios library.
// @param { url } the string url.
// @returns [ array] an array of objects containing the vehicles data.
const getVehiclesData = async (url) => {
	let response = await axios.get(url);
	return response['data']['result']['records'];
};


// @Description: Function to get vehicles latitude and longitude coordinates.
// @param [ data ] an array of objects containing the data obtained from the Metrubuses API using the getVehiclesData function.
// @returns [ array ] an array of latitude and longitude coordinates.
const getCoordinates = (data) => {
	return data.map(vehicle => coordinates = { lat: vehicle['position_latitude'], long: vehicle['position_longitude'] });
};


// @Description: This function saves the vehicles data in the metrobuses table of Metrobuses_db database.
// @param [ vehiclesData ] an array of vehicles object obtained with getVehiclesData function.
const saveVehiclesData = (vehiclesData) => {
	
	vehiclesData.forEach(async (vehicle) => {
		await Vehicle.create({		// Data is saved in the db using the 'create' method of Vehicle Model.
			vehicle_id: vehicle['vehicle_id'],
			vehicle_label: vehicle['vehicle_label'],
			current_status: vehicle['vehicle_current_status'],
			latitude: vehicle['position_latitude'],
			longitude: vehicle['position_longitude'],
			geographic_point: vehicle['geographic_point'],
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
// @param { gecoderConfig } an object with the settings (API Key and type of result) to use Geocoder library.
const saveVehiclesDelegations = (coords, geocoderConfig) => {

	// Each element of the list is iterated and the geocoder is called to obtain the address.
	coords.forEach((coord) => {

		// The reverseGocoder method accepts the two coordinates.
		// And an asynchrunous callback function is used to handle the response of the geocoder.
		geocoder.reverseGeocode(coord.lat, coord.long, async (err, data) => {
			if (data) {
				let address = data['results'][0]['formatted_address'];
				let addressComponents = address.split(', ');
				let delegation = addressComponents[addressComponents.length - 4].toLowerCase();

				// Using the Vehicle model, the metrobuses table is updated with its corresponding addres and delegations.
				await Vehicle.update({
					address: address,
					delegation: delegation
				}, 
				{
					where: { latitude: coord.lat }
				});
			} else if (err) {
				throw new Error('Location not found');
			}
		},
		// Geocoder configuration(API key)
		geocoderConfig  
		);
	});
};



// Exporting functions to use in seed.js module.
module.exports = {
	getVehiclesData,
	getCoordinates,
	saveVehiclesData,
	saveVehiclesDelegations
};