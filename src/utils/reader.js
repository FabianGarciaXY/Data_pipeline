const axios = require('axios').default;
const Vehicle = require('../models/vehicles.model');
const gecoder = require('geocoder');


require('dotenv').config();


const getData = async () => {

	const url = 'https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=ad360a0e-b42f-482c-af12-1fd72140032e&limit=4';
	const response = await axios.get(url);
	const data = response['data']['result']['records'];

	for (let vehicle of data) {

		const latitude = vehicle['position_latitude'];
		const longitude = vehicle['position_longitude'];

		await gecoder.reverseGeocode(latitude, longitude, async (err, data) => {

			const fullAdress = data['results'][0]['formatted_address'];
			const addressComponents = fullAdress.split(', ');
			const delegation = addressComponents[addressComponents.length - 4].toLowerCase();

			await Vehicle.create({
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
				trip_route_id: vehicle['trip_route_id'],
				address: fullAdress,
				delegation: delegation
			});
		},
		{
			key: process.env.GOOGLEMAPSKEY,
			result_type: 'route',
			language: 'es',
		}
		);
	}
};


// Exporting function
module.exports = getData;