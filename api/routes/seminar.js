const express = require('express');
const router = express.Router();

const seminarController = require('../controllers/seminar');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artist
router.get('/:seminarId', seminarController.seminarGetByID );
router.get('/day/:date', seminarController.seminarGetByDay);
router.post('/', adminAuthCheck, seminarController.seminarPost);
router.delete('/:seminarId', adminAuthCheck, seminarController.seminarDelete);
module.exports = router;