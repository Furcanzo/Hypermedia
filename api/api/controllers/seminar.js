const {Client} = require ('pg');
const connect = require('../../server');

exports.seminarGetByID = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.seminarId;
		client.query('SELECT id, day::text, title, location FROM seminars WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			client.query('SELECT id FROM artistic_events WHERE seminar_id = ' + id, (err, resultA)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					seminars: result.rows.map(row =>{
						return {
							title: row.title,
							day: row.day,
							location: row.location,
							id: row.id
						}
					}),
					artisticEventLink: resultA.rows.map(row =>{
						return {
							request: {
								type: 'GET',
								url: 'http://localhost:3000/artisticEvent/'+row.id //indirizzo hardcoddato!!!!
							}
						}
					}) 
				};
				res.status(200).json(response);
			});
		});
	});
};

exports.seminarGetByDay = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const date = req.params.date;
		client.query('SELECT distinct(s.id), s.day::text, s.title FROM artistic_events a JOIN seminars s ON a.seminar_id = s.id WHERE date(s.day)::text=\''+date+'\' ORDER BY day', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			const response = {
				count: result.rows.length,
				seminars: result.rows.map(row => {
					return {
						title: row.title,
						day: row.day,
						id: row.id,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/seminar/' + row.id //indirizzo hardcoddato!!!!
						}
					}
				})
			};

			res.status(200).json(response);
		});
	});
};