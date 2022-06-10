const app = require('./../controllers/controller');
const router = require('express').Router();


router
	.get('/', controller.app)
	.get('/metrobuses', controller.getAvailableVehicles)
	.get('/metrobuses/:id', controller.getVehicleLocationById)
	.get('/alcaldias', controller.getAvailableTowns)
	.get('/alcaldias/:name', controller.getVehiclesByTown);


module.exports = router;