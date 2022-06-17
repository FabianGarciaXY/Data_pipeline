const { getVehiclesData, getCoordinates, saveVehiclesData, saveVehiclesDelegations } = require('./reader');
require('dotenv').config(); // Config to access to environment variables.

/*  This module is used to fill the db with the vehicles data and their locations using the functions defined in the reader.js */


// Configuration for geocoder Google maps API that's used in saveVehiclesDelegations Function.
const geocoderConfig = {
	key: process.env.GOOGLEMAPSKEY,
	result_type: 'route',
	language: 'es'
};

// @Description: Function, process save the vehicles data by calling functions from reader.js.
// @param "url", the string url of the metrobuses API.
// @param { geocoderConfig } the configuration object for geocoder.
const getData = async (url, geocoderConfig) => {
	// The data is obtained and saved in database.
	const vehiclesData = await getVehiclesData(url);
	saveVehiclesData(vehiclesData);
	// The delegations and addresses are obtained and saved in database.
	const coordinates = await getCoordinates(vehiclesData);
	saveVehiclesDelegations(coordinates, geocoderConfig);
};


// Exporting function to use in main module index.js
module.exports = {
	getData,
	geocoderConfig
};