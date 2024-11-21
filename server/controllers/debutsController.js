const Debut = require('../models/Debut');

async function getAllDebuts(req, res) {
    try {
        const result = await Debut.find({});
        res.json({message: 'success', payload: result});
    } catch (error) {
        res.json({message: 'success', })
    }
}

module.exports = {
    getAllDebuts,
}