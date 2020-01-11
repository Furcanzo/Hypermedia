const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const authCheck = require('../middleware/basic_check-auth');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.post('/signup', userController.userSignUp );
router.post('/login', userController.userLogin );
router.get('/',adminAuthCheck, userController.userGetAll );
router.patch('/changePW',authCheck, userController.userChangePassword );
router.post('/createAdmin', adminAuthCheck, userController.userCreateAdmin);
module.exports = router;