const controller = require('./../controllers/controller');
const router = require('express').Router();


router
	.get('/', controller.app)
	.get('/vehicles', controller.getAllVehicles)
	.get('/vehicles/:id', (req, res) => {
		res.json({
			message: `La ubicación del vehículo con ID ${req.params.id} es : x`
		});
	})
	.get('/alcaldias', (req, res) => {
		res.json({
			message: 'Hay X alcaldias disponibles'
		});

	});
router.get('/alcaldias/:id', (req, res) => {
	res.json({
		message: `Hay X metrobuces disponibles para la alcaldía ${req.params.id}`
	});
});


module.exports = router;