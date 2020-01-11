const {Client} = require ('pg');
const connect = require('../../server');

//TODO Aggiungere foto
exports.artisticEventGetAll = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('SELECT name, day::text,id, type FROM artistic_events ORDER BY day', (err, resultAE)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}

			client.query('SELECT distinct(s.id), s.day::text, s.title FROM artistic_events a JOIN seminars s ON a.seminar_id = s.id  ORDER BY day', (err, resultS)=> {
				if (err) {
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}

				const response = {
					countAE: resultAE.rows.length,
					artistic_events: resultAE.rows.map(row => {
						return {
							name: row.name,
							day: row.day,
							id: row.id,
							type: row.type,
							request: {
								type: 'GET',
								url: connect.root+'artisticEvent/' + row.id
							}
						}
					}),
					countS: resultS.rows.length,
					seminars: resultS.rows.map(row =>{
						return {
							title: row.title,
							day: row.day,
							id: row.id,
							request: {
								type: 'GET',
								url: connect.root + 'seminar/'+row.id
							}
						}
					})

				};
				res.status(200).json(response);
			});
		});
	});
};

exports.artisticEventGetCalendar =  (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('SELECT distinct date(day)::text FROM artistic_events', (err, resultAE)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			client.query('SELECT distinct date(day)::text FROM seminars', (err, resultS)=> {
				if (err) {
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					countAE: resultAE.rows.length,
					daysAE: resultAE.rows.map(row => {
						return {
							day: row.date,
							request: {
								type: 'GET',
								url: row.date!=null? connect.root + 'artisticEvent/day/' + row.date : null
							}
						}
					}),
					countS: resultS.rows.length,
					daysS: resultS.rows.map(row => {
						return {
							date: row.date,
							request: {
								type: 'GET',
								url: row.date!=null? connect.root + 'seminar/day/' + row.date : null
							}
						}
					})

				};

				res.status(200).json(response);
			});
		});
	});
};

exports.artisticEventGetByID = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.artisticEventId;
		client.query('SELECT name,day::text,fact_sheet,abstract,seminar_id,id FROM artistic_events WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			client.query('SELECT P.events_id, A.name AS artist_name, A.id AS artist_id, C.name AS companies_name, C.id AS companies_id\n' +
				'FROM played P \n' +
				'LEFT OUTER JOIN artists A ON P.artists_id = A.id \n' +
				'LEFT OUTER JOIN companies C ON P.companies_id = C.id \n' +
				'WHERE P.events_id =' + id, (err, resultP)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}

				const response = {
					artistic_events: result.rows.map(row =>{
						return {
							name: row.name,
							day: row.day,
							fact_sheet: row.fact_sheet,
							abstract: row.abstract,
							id: row.id,
							seminar:  {
								type: 'GET',
								url: row.seminar_id!=null? connect.root + 'seminar/'+row.seminar_id : null
							}
						}
					}),
					performerLink: resultP.rows.map(row =>{
						return {
							name: row.artist_name!=null? row.artist_name : row.companies_name,
							request: {
								type: 'GET',
								url: row.artists_id ===null? connect.root + 'company/'+row.companies_id : connect.root + 'artist/'+row.artists_id
							}
						}
					}) 
				};
				res.status(200).json(response);
			});
		});
	});
};

exports.artisticEventGetByType = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const type = req.params.artisticEventType;
		if(type === 'seminar'){
			client.query('SELECT distinct(s.id), s.day::text, s.title FROM artistic_events a JOIN seminars s ON a.seminar_id = s.id  ORDER BY day', (err, result)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					count: result.rows.length,
					seminars: result.rows.map(row =>{
						return {
							title: row.title,
							day: row.day,
							id: row.id,
							request: {
								type: 'GET',
								url: connect.root + 'seminar/'+row.id
							}
						}
					})

				};
				res.status(200).json(response);
			});
		}
		else{
			client.query('SELECT name, day::text,id FROM artistic_events WHERE type=\''+type+'\' ORDER BY day', (err, result)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
			
				const response = {
					count: result.rows.length,
					artistic_events: result.rows.map(row =>{
						return {
							name: row.name,
							day: row.day,
							id: row.id,
							request: {
								type: 'GET',
								url: connect.root + 'artisticEvent/'+row.id
							}
						}
					})

				};

				res.status(200).json(response);
			});
		}
	});
};

exports.artisticEventGetByDay = (req, res, next)=>{
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
		client.query('SELECT name, day::text,id FROM artistic_events WHERE date(day)::text=\''+date+'\' ORDER BY day', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			const response = {
				count: result.rows.length,
				artistic_events: result.rows.map(row =>{
					return {
						name: row.name,
						day: row.day,
						id: row.id,
						request: {
							type: 'GET',
							url: connect.root + 'artisticEvent/'+row.id
						}
					}
				})

			};

			res.status(200).json(response);
		});
	});
};

exports.artisticEventPost = (req, res, next)=>{
	let seminarId;
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		if(req.body.seminar){
			client.query('SELECT id FROM seminars WHERE title =\''+ req.body.seminar+ '\'', (err, results)=>{
				if (err){
					const error = new Error('Query error finding seminar');
					error.status = 500;
					return next(error);
				}
				client.query('INSERT INTO artistic_events (name, fact_sheet, day, abstract, seminar_id)' +
					'VALUES(\''+req.body.name+'\',\'' +req.body.fact_sheet +'\',\''+req.body.day+'\',\''+req.body.abstract+'\','+ results.rows[0].id +')', (err, result)=>{
					if (err){
						console.log(seminarId);
						const error = new Error('Query error');
						error.status = 500;
						return next(error);
					}
					res.status(201).json({
						message: 'event added'
					});
				});
			});
		}
		else{
			client.query('INSERT INTO artistic_events (name, fact_sheet, day, abstract)' +
				'VALUES(\''+req.body.name+'\',\'' +req.body.fact_sheet +'\',\''+req.body.day+'\',\''+req.body.abstract+'\')', (err, result)=>{
				if (err){
					console.log(seminarId);
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				res.status(201).json({
					message: 'event added'
				});
		});
		}
	});
};

exports.artisticEventDelete = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.artisticEventId;
		client.query('DELETE FROM artistic_events WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(205).json({
				message: 'event deleted'
			});
			
		});
	});
};
