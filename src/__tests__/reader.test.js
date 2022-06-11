const axios = require('axios').default;


const url = 'https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=ad360a0e-b42f-482c-af12-1fd72140032e&limit=1000';


describe('Suite de tests para validar la informacion de metrobuces de CDMX', () => {

	test('Test 1: validando que la que el endpoint sea contenga los datos requeridos', async () => {
		const response = await axios.get(url)
		expect(response).not.toBeUndefined();
	});

	test('Test 2: validando la cantidad de registros obtenidos', async () => {
		const response = await axios.get(url)
		const records = response.data.result.records.length;
		expect(records).toBe(207);
	});
});