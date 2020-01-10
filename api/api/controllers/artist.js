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
			client.query('SELECT events_id FROM played WHERE artists_id =' + id, (err, resultA)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					artist: result.rows.map(row =>{
						return {
							name: row.name,
							details: row.details,
							current_affiliation: row.current_affiliation,
							main_achievements: row.main_achievements
						}
					}),
					artisticEventLink: resultA.rows.map(row =>{
						return {
							request: {
								type: 'GET',
								url: 'http://localhost:3000/artisticEvent/'+row.events_id//indirizzo hardcoddato!!!!
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
		client.query('DELETE FROM artist WHERE id =' + id, (err, result)=>{
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