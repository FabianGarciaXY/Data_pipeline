const controller = require('./../controllers/controller');
const router = require('express').Router();

/*
 * This module defines the endoinds to obtain metrobus data.
 * 
 * To do so, the router method of express is used, which receives 2 parameters:
 * 
 * @param {'/route'} The route of the endpoint, as well as certain parameters defined as '/:param'.
 * @param { callback } A callback function defined in controllers.
d*/


// Defining the endpoints for server
router.get('/', controller.root);
router.get('/metrobuses', controller.getAvailableVehicles);
router.get('/metrobuses/:id', controller.getVehicleLocationById);
router.get('/alcaldias', controller.getAvailableTowns);
router.get('/alcaldias/:name', controller.getVehiclesByTown);


// Exporting routes to use in main module
module.exports = router;