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

//Utilities
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//list of entities
app.use('/artisticEvent', artisticEventRoutes);
app.use('/performer', performerRoutes);
app.use('/artist', artistRoutes);
app.use('/company', companyRoutes);
app.use('/registration', registrationRoutes);
app.use('/seminar', seminarRoutes);
app.use('/user', userRoutes);


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