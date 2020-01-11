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
		client.query('SELECT name, day::text,id FROM artistic_events ORDER BY day', (err, resultAE)=>{
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
							request: {
								type: 'GET',
								url: 'http://localhost:3000/artisticEvent/' + row.id //indirizzo hardcoddato!!!!
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
								url: 'http://localhost:3000/seminar/'+row.id //indirizzo hardcoddato!!!!
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
								url: row.date!=null? 'http://localhost:3000/artisticEvent/day/' + row.date : null//indirizzo hardcoddato!!!!
							}
						}
					}),
					countS: resultS.rows.length,
					daysS: resultS.rows.map(row => {
						return {
							date: row.date,
							request: {
								type: 'GET',
								url: row.date!=null? 'http://localhost:3000/seminar/day/' + row.date : null//indirizzo hardcoddato!!!!
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
			client.query('SELECT * FROM played WHERE events_id =' + id, (err, resultP)=>{
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
								url: row.seminar_id!=null? 'http://localhost:3000/seminar/'+row.seminar_id : null //indirizzo hardcoddato!!!!
							}
						}
					}),
					performerLink: resultP.rows.map(row =>{
						return {

							request: {
								type: 'GET',
								url: row.artists_id ===null? 'http://localhost:3000/company/'+row.companies_id : 'http://localhost:3000/artist/'+row.artists_id //indirizzo hardcoddato!!!!
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
								url: 'http://localhost:3000/seminar/'+row.id //indirizzo hardcoddato!!!!
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
								url: 'http://localhost:3000/artisticEvent/'+row.id //indirizzo hardcoddato!!!!
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
							url: 'http://localhost:3000/artisticEvent/'+row.id //indirizzo hardcoddato!!!!
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
