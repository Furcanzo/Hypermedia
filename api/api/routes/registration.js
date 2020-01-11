const express = require('express');
const router = express.Router();

const registrationController = require('../controllers/registration');
const authCheck = require('../middleware/basic_check-auth');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.get('/', authCheck, registrationController.registrationGetYours);
router.post('/', authCheck , registrationController.registrationPost);
router.get('/admin/',adminAuthCheck, registrationController.registrationGetAll );
router.delete('/:registrationId', authCheck, registrationController.registrationDeleteById);

module.exports = router;