const controller = require('./../controllers/controller');
const router = require('express').Router();


// Defining the endpoints for server
router.get('/', controller.root);
router.get('/metrobuses', controller.getAvailableVehicles);
router.get('/metrobuses/:id', controller.getVehicleLocationById);
router.get('/alcaldias', controller.getAvailableTowns);
router.get('/alcaldias/:name', controller.getVehiclesByTown);

// Exporting routes to use in main module
module.exports = router;