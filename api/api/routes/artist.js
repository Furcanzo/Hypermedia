const express = require('express');
const router = express.Router();

const artistController = require('../controllers/artist');

//list of routes for artist
router.get('/:artistId',artistController.artistGetByID);
router.post('/',artistController.artistPost);
router.delete('/:artistId',artistController.artistDelete);
module.exports = router;