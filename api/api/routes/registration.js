const express = require('express');
const router = express.Router();

const registrationController = require('../controllers/registration');
const authCheck = require('../middleware/basic_check-auth');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.get('/', authCheck, registrationController.registrationGetYours)
router.post('/', authCheck , registrationController.registrationPost);
router.get('/',adminAuthCheck, registrationController.registrationGetAll );
module.exports = router;