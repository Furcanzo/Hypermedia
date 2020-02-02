const {Client} = require ('pg');
const connect = require('../../server');

exports.artistGetByID = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.artistId;
		client.query('SELECT * FROM artists WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			client.query('SELECT A.name AS event_name, P.events_id AS events_id \n' +
				'FROM played P \n' +
				'JOIN artistic_events A \n' +
				'ON P.events_id = A.id \n' +
				'WHERE P.artists_id = ' + id, (err, resultA)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					artist: result.rows.map(row =>{
						return {
							id: row.id,
							name: row.name,
							details: row.details,
							current_affiliation: row.current_affiliation,
							main_achievements: row.main_achievements,
							photos:{
								type: 'GET',
								url: connect.root+'photos/requestList/artist/'+row.id
							}
						}
					}),
					artisticEventLink: resultA.rows.map(row =>{
						return {
							name: row.event_name,
							request: {
								type: 'GET',
								url: connect.root+'artisticEvent/'+row.events_id
							}
						}
					}) 
				};
				res.status(200).json(response);
			});
		});
	});
};

exports.artistPost = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}

		client.query('INSERT INTO artists (name, details, current_affiliation, main_achievements)' +
			'VALUES(\''+req.body.name+'\',\''+req.body.details+'\',\''+req.body.current_affiliation+'\',\''+req.body.main_achievements+'\')', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 401;
				return next(error);
			}
			res.status(201).json({
				message: 'artist added'
			});
		});
	});
};

exports.artistDelete = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.artistId;
		client.query('DELETE FROM artists WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(205).json({
				message: 'artist deleted'
			});

		});
	});
};