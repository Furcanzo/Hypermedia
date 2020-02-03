const express = require('express');
const router = express.Router();

const artisticEventController = require('../controllers/artisticEvent');
const adminAuthCheck = require('../middleware/admin_check-auth');

//list of routes for artisticEvent
router.get('/', artisticEventController.artisticEventGetAll );
router.get('/calendar', artisticEventController.artisticEventGetCalendar);
router.get('/:artisticEventId',artisticEventController.artisticEventGetByID);
router.get('/type/:artisticEventType',artisticEventController.artisticEventGetByType);
router.get('/day/:date', artisticEventController.artisticEventGetByDay);
router.post('/',adminAuthCheck, artisticEventController.artisticEventPost);
router.delete('/:artisticEventId', adminAuthCheck, artisticEventController.artisticEventDelete);
module.exports = router;