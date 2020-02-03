const express = require('express');
const router = express.Router();

//list of routes for backend documentation
router.get('swaggerui', (req, res, next)=>{
    //todo
});

router.get('/:file', (req, res, next)=>{
    res.sendFile(req.params.file, {root: __dirname + '/documentation'});
});

module.exports = router;