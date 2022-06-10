const Metrobuses = require('../models/model');

let counter = 0;

// Ruta raiz
const app = (req, res) => {
	try {
		return res.status(200).json({ 'message': `This server has been visited ${counter++} times` });
	} catch (err) {
		return res.status(500).json(err);
	}
};

// Obtener las unidades disponibles
const getAvailableVehicles = async (req, res) => {
	try {
		const allVehicles = await Metrobuses.findAll();
		return res.status(200).json(allVehicles);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// Consultar la ubicación de una unidad dado su ID
const getVehicleLocationById = async (req, res) => {
	try {
		const id = req.params.id;
		const vehicle = await Metrobuses.findOne(); // Correct here		
		return res.status(200).json(vehicle);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// Obtener una lista de alcaldías disponibles
const getAvailableTowns = async (req, res) => {
	try {
		const allTowns = await Metrobuses.findAll();
		return res.status(200).json(allTowns);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// Obtener la lista de unidades que se encuentren dentro de una alcaldía
const getVehiclesByTown = async (req, res) => {
	try {
		const id = req.params.name;
		const vehicle = await Metrobuses.findMany(); // Correct here		
		return res.status(200).json(vehicle);
	} catch (err) {
		return res.status(500).json(err);
	}
};


module.exports = {
	app: app,
	getAvailableVehicles: getAvailableVehicles,
	getVehicleLocationById: getVehicleLocationById,
	getAvailableTowns: getAvailableTowns,
	getVehiclesByTown: getVehiclesByTown
};