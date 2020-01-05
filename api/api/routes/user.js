const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

//list of routes for artist
router.get('/', userController.userGetAll );
router.post('/signup', userController.userSignUp );
router.post('/login', userController.userLogin );
module.exports = router;