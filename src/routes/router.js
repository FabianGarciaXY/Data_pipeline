const controller = require('./../controllers/controller');
const { Router } = require('express');
const router = Router();


let count = 0;


router.get('/', (req, res) => {
    res.json({"message":`This server has been visited ${count ++} times`});
})


router.get('/vehicles', (req, res) => {
    res.json({
        message: 'Hay X vehiculos disponibles'
    })
})


router.get('/vehicles/:id', (req, res) => {
    res.json({
        message: `La ubicación del vehículo con ID ${req.params.id} es : x`
    })
})


router.get('/alcaldias', (req, res) => {
    res.json({
        message: 'Hay X alcaldias disponibles'
    })
})


router.get('/alcaldias/:id', (req, res) => {
    res.json({
        message: `Hay X metrobuces disponibles para la alcaldía ${req.params.id}`
    })
})


module.exports = router;