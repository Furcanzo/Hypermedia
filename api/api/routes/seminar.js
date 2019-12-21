const express = require('express');
const router = express.Router();

const seminarController = require('../controllers/seminar');

//list of routes for artist
router.get('/:seminarId', seminarController.seminarGetByID );
router.get('/day/:date', seminarController.seminarGetByDay);
module.exports = router;