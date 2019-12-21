const express = require('express');
const router = express.Router();

const registrationController = require('../controllers/registration');

//list of routes for artist
router.get('/', registrationController.registrationGetAll );
module.exports = router;