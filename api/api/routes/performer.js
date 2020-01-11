const express = require('express');
const router = express.Router();

const performerController = require('../controllers/performer');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artists and companies
router.get('/', performerController.performerGetAll );
module.exports = router;