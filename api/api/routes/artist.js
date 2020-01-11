const express = require('express');
const router = express.Router();

const artistController = require('../controllers/artist');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.get('/:artistId', artistController.artistGetByID);
router.post('/', adminAuthCheck, artistController.artistPost);
router.delete('/:artistId', adminAuthCheck, artistController.artistDelete);
module.exports = router;