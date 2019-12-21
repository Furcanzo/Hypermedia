const express = require('express');
const router = express.Router();

const artistController = require('../controllers/artist');

//list of routes for artist
router.get('/:artistId',artistController.artistGetByID);
module.exports = router;