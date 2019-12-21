const express = require('express');
const router = express.Router();

const artisticEventController = require('../controllers/artisticEvent');

//list of routes for artisticEvent
router.get('/', artisticEventController.artisticEventGetAll );
router.get('/calendar', artisticEventController.artisticEventGetCalendar);
router.get('/:artisticEventId',artisticEventController.artisticEventGetByID);
router.get('/type/:artisticEventType',artisticEventController.artisticEventGetByType);
router.get('/day/:date', artisticEventController.artisticEventGetByDay)
router.post('/',artisticEventController.artisticEventPost);
router.delete('/:artisticEventId',artisticEventController.artisticEventDelete);
module.exports = router;