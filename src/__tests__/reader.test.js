const data = require('../utils/reader');


describe('Suite de tests para validar la informacion de metrobuces de CDMX', () => {

	test('Test 1: validando que la informacion sea recibida exista', () => {
		expect(data).not.toBeUndefined();
	});

	test('Test 2: validando la cantidad de registros obtenidos', () => {

		const recordsQuantity = data.result.records.length;
		expect(recordsQuantity).toBe(207);
	});
});