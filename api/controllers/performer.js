const {Client} = require ('pg');
const connect = require('../../server');

exports.performerGetAll = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			client.end();
			return next(error);
		}
		client.query('SELECT * FROM artists', (err, resultA)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				client.end();
				return next(error);
			}
			client.query('SELECT * FROM companies', (err, resultC)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					client.end();
					return next(error);
				}
				const response = {
					countArtists: resultA.rows.length,
					artists: resultA.rows.map(row =>{
						return {
							name: row.name,
							id: row.id,
							photos:{
								type: 'GET',
								url: connect.root + 'photos/preview/artist/'+row.id
							},
							request: {
								type: 'GET',
								url: connect.root + 'artist/'+row.id
							}
						}
					}),
					countCompanies: resultC.rows.length,
					companies: resultC.rows.map(row =>{
						return {
							name: row.name,
							id: row.id,
							photos:{
								type: 'GET',
								url: connect.root + 'photos/preview/company/'+row.id
							},
							request: {
								type: 'GET',
								url: connect.root + 'company/'+row.id
							}
						}
					})
				};

				res.status(200).json(response);
				client.end();
			});
		});
	});
};