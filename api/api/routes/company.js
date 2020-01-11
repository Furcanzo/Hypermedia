const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.get('/:companyId',companyController.companyGetByID);
module.exports = router;