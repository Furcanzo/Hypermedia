const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');

const inputfile = __dirname + '/../../documentation/spec.yaml',
    outputfile = 'output.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));

//list of routes for backend documentation
router.use('/swaggerui', swaggerUi.serve);
router.get('/swaggerui', swaggerUi.setup(obj));

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