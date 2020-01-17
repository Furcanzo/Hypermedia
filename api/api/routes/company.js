const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.get('/:companyId',companyController.companyGetByID);
router.post('/', adminAuthCheck, companyController.companyPost);
router.delete('/:companyId', adminAuthCheck, companyController.companyDelete);
module.exports = router;