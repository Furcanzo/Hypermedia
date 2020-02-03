const express = require('express');
const router = express.Router();

//list of routes for backend documentation
router.get('swaggerui', (req, res, next)=>{
    //todo
});

router.get('/:file', (req, res, next)=>{
    res.sendFile(req.params.file, {root: __dirname + '/../../documentation'}, (err)=>{
        if(err){
            const error = new Error('Not found');
            error.status = 404;
            next(error);
        }
    });
});

module.exports = router;