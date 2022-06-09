const User = require('../models/model');

let counter = 0;

exports.app = async (req, res) => {
    try {
        res.json({ 'message': `This server has been visited ${counter++} times` });
    } catch (err) {
        return res.status(500);
    }
}

exports.getAllVehicles = async (req, res) => {
    try {
        const allData = await User.findAll();
        return res.status(200).json(allData);
    } catch (err) {
        return res.status(500);
    }
}