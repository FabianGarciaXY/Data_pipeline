const axios = require('axios').default;


const url = 'https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=ad360a0e-b42f-482c-af12-1fd72140032e&limit=1000';

const getData = async () => {
	const data = await axios.get(url);
	return data;

};