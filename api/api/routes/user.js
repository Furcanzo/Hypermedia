const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

//list of routes for artist
router.get('/', userController.userGetAll );
module.exports = router;