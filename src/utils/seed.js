const { getVehiclesData, getCoordinates, saveVehiclesData, saveVehiclesDelegations } = require('./reader');
require('dotenv').config();

/*
 * This module is used to fill the database with the metrobus API data,
 * as well as its location using the Google geocoder API by using the midelwares of the reader.js file.
*/


// Configuration for geocoder from Google maps API that's used in saveVehiclesDelegations Function.
const geocoderConfig = {
	key: process.env.GOOGLEMAPSKEY,
	result_type: 'route',
	language: 'es'
};


// Main function
const getData = async (url, geocoderConfig) => {

	const vehiclesData = await getVehiclesData(url);
	saveVehiclesData(vehiclesData);

	const coordinates = await getCoordinates(vehiclesData);
	saveVehiclesDelegations(coordinates, geocoderConfig);
};


// Exporting function
module.exports = {
	getData,
	geocoderConfig
};