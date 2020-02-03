const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//list of modules
const artisticEventRoutes = require('./api/routes/artisticEvent');
const performerRoutes = require('./api/routes/performer');
const artistRoutes = require('./api/routes/artist');
const companyRoutes = require('./api/routes/company');
const registrationRoutes = require('./api/routes/registration');
const seminarRoutes = require('./api/routes/seminar');
const userRoutes = require('./api/routes/user');
const galleryRoutes = require('./api/routes/gallery');
const backendRoutes = require('./api/routes/backend');

//Utilities
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//prevent cors error
app.use((req, res, next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PATCH');
		return res.status(200).json({});
	}
	next();
});

//list of entities
app.use('/artisticEvent', artisticEventRoutes);
app.use('/performer', performerRoutes);
app.use('/artist', artistRoutes);
app.use('/company', companyRoutes);
app.use('/registration', registrationRoutes);
app.use('/seminar', seminarRoutes);
app.use('/user', userRoutes);
app.use('/photos', galleryRoutes);
app.use('/backend', backendRoutes);

//assets
/*
type =
css,
js
 */
app.use('/assets/:type/:file', (req, res, next)=> {
	res.sendFile(req.params.file, {root: __dirname + '/Resto/FrontEnd/assets/'+req.params.type}, (err)=>{
		if(err){
			const error = new Error('Not found');
			error.status = 404;
			next(error);
		}
	});
	}
);

//pages
app.use('/pages/:file', (req, res, next)=> {
		res.sendFile(req.params.file, {root: __dirname + '/Resto/FrontEnd/pages'});
	}
);

//favicon.ico
app.use('/favicon.ico', (req, res, next)=> {
		res.sendFile('favicon.ico', {root: __dirname + '/staticAssets'});
	}
);

//index.html
app.use('/', (req, res, next)=>{
	if (req.url === '/') {
		res.sendFile('index.html', {root: __dirname + '/Resto/FrontEnd'});
	}
	else {
		next();
	}

});

//Errors handling
app.use((req, res, next)=>{
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next)=>{
	res.status(error.status || 500);
	res.json({
		message: error.message
	});
});


module.exports = app;