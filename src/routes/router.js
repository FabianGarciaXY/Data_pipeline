const rootController = require('./../controllers/root.controller');
const vehiclesController = require('./../controllers/vehicles.controller');
const delegationController = require('./../controllers/delegations.controller');
const router = require('express').Router();


/*
 * This module defines the endoinds to obtain metrobus data from this API.
 * To do so, the router method of express is used, which receives 2 parameters:
 * 
 * @param "route" the route of the endpoint, as well as certain parameters defined as '/:param'.
 * @param ( callback function ) a callback function defined in controllers.
*/


// Defining the endpoints for server
router.get('/', rootController.root);
router.get('/metrobuses', vehiclesController.getAvailableVehicles);
router.get('/metrobuses/:id', vehiclesController.getVehicleLocationById);
router.get('/alcaldias', delegationController.getAvailableDelegations);
router.get('/alcaldias/:name', delegationController.getVehiclesByDelegation);


// Exporting routes to use in main module index.js
module.exports = router;