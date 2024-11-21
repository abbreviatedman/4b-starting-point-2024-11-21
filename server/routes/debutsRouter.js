const express = require('express');

const {
    getAllDebuts,
} = require('../controllers/debutsController');

const router = express.Router();

router.get('/', getAllDebuts);

module.exports = router;