const Metrobuses = require('../models/model');

let counter = 0;

exports.app = (req, res) => {
	try {
		return res.status(200).json({ 'message': `This server has been visited ${counter++} times` });
	} catch (err) {
		return res.status(500).json(err);
	}
};

exports.getAllVehicles = async (req, res) => {
	try {
		const allVehicles = await Metrobuses.findAll();
		return res.status(200).json(allVehicles);
	} catch (err) {
		return res.status(500).json(err);
	}
};