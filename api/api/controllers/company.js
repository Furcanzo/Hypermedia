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