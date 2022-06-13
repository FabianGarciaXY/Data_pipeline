const axios = require('axios').default;
const Vehicle = require('../models/model');
//const gc = require('geocoder');

require('dotenv').config();

/* gc.reverseGeocode(lat1, long1, (err, data) => {

	if (data) { console.log(data['results'][0]['formatted_address']) }
	else { console.log(err); }
},
	{ language: 'es', key: process.env.GOOGLEMAPSKEY }
); */

const url = 'https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=ad360a0e-b42f-482c-af12-1fd72140032e&limit=3';

(async function getData() {

	try {
		const response = await axios.get(url);
		const data = response.data.result.records;

		for (let vehicle of data) {

			const newVehicle = await Vehicle.create({
				vehicle_id: vehicle.vehicle_id,
				vehicle_label: vehicle.vehicle_label,
				current_status: vehicle.vehicle_current_status,
				latitude: vehicle.position_latitude,
				longitude: vehicle.position_longitude,
				position_speed: vehicle.position_speed,
				position_odometer: vehicle.position_odometer,
				trip_schedule_relationship: vehicle.trip_schedule_relationship,
				trip_id: vehicle.trip_id,
				trip_start_date: vehicle.trip_start_date,
				trip_route_id: vehicle.trip_route_id
			});
			console.log('Here', newVehicle);
		}

	} catch (err) {
		console.log(err);
	}
})(); 