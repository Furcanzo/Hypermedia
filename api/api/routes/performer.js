const express = require('express');
const router = express.Router();

const performerController = require('../controllers/performer');

//list of routes for artists and companies
router.get('/', performerController.performerGetAll );
module.exports = router;