const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        let filetype = '';
        if(file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if(file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if(file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
const upload = multer({storage: storage});

const galleryController = require('../controllers/gallery');

const adminAuthCheck = require('../middleware/admin_check-auth');

/*
type =
    artisticEvent,
    artist,
    company,
    seminar
 */
router.get('/requestList/:type/:id', galleryController.getRequestList);
router.get('/id/:id', galleryController.getById);
router.get('/preview/:type/:id', galleryController.getPreview);
router.patch('/:type/:id', adminAuthCheck, upload.single('image'), galleryController.patch);
module.exports = router;
