const {Client} = require ('pg');
const connect = require('../../server');

exports.registrationGetAll = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('SELECT * FROM registrations', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(200).json({
				registration: result.rows.map(row=>{
					return {
						id: row.id,
						name: row.name,
						request: {
							type: 'GET',
							url: connect.root + 'artisticEvent/' + row.artistic_events_id
						}
					}
				})
			});
			
		});
	});
};

exports.registrationPost = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('INSERT INTO registrations (artistic_events_id, user_web_id) VALUES ('+req.body.artistic_events_id+','+req.userData.id+' )', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(201).json({
				message: "Registration succeed"
			});

		});
	});
};

exports.registrationGetYours = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('SELECT R.artistic_events_id, R.id, AE.name FROM registrations R JOIN artistic_events AE ON R.artistic_events_id= AE.id WHERE user_web_id = '+ req.userData.id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(200).json({
				registration: result.rows.map(row=>{
					return {
						id: row.id,
						name: row.name,
						request: {
							type: 'GET',
							url: connect.root + 'artisticEvent/' + row.artistic_events_id
						}
					}
				})
			});

		});
	});
};

exports.registrationDeleteById = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.registrationId;
		client.query('DELETE FROM registrations WHERE user_web_id = '+ req.userData.id + 'AND artistic_events_id = '+ id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(200).json({
				message: 'registration deleted'
			});

		});
	});
};