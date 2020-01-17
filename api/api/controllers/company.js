const {Client} = require ('pg');
const connect = require('../../server');

exports.companyGetByID = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
			const id = req.params.companyId;
		client.query('SELECT * FROM companies WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			client.query('SELECT events_id FROM played WHERE companies_id =' + id, (err, resultA)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					company: result.rows.map(row =>{
						return {
							id: row.id,
							name: row.name,
							details: row.details
						}
					}),
					artisticEventLink: resultA.rows.map(row =>{
						return {
							request: {
								type: 'GET',
								url: connect.root + 'artisticEvent/'+row.events_id
							}
						}
					}) 
				};
				res.status(200).json(response);
			});
		});
	});
};

exports.companyPost = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}

		client.query('INSERT INTO companies (name, details)' +
			'VALUES(\''+req.body.name+'\',\''+req.body.details+'\')', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 401;
				return next(error);
			}
			res.status(201).json({
				message: 'companies added'
			});
		});
	});
};

exports.companyDelete = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		const id = req.params.companyId;
		client.query('DELETE FROM companies WHERE id =' + id, (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(205).json({
				message: 'company deleted'
			});

		});
	});
};