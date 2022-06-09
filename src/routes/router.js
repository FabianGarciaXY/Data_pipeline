const controller = require('./../controllers/controller');
const router = require('express').Router();

let count = 0;

router
	.get('/', (req, res) => {
		res.json({ 'message': `This server has been visited ${count++} times` });
	})
	.get('/vehicles', (req, res) => {
		res.json({
			message: 'Hay X vehiculos disponibles'
		});
	})
	.get('/vehicles/:id', (req, res) => {
		res.json({
			message: `La ubicación del vehículo con ID ${req.params.id} es : x`
		});
	})
	.get('/alcaldias', (req, res) => {
		res.json({
			message: 'Hay X alcaldias disponibles'
		});
		router.get('/alcaldias/:id', (req, res) => {
			res.json({
				message: `Hay X metrobuces disponibles para la alcaldía ${req.params.id}`
			});
		});
	});


module.exports = router;