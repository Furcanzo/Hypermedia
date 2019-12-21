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
			return next(error);
		}
		client.query('SELECT * FROM artists', (err, resultA)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			client.query('SELECT * FROM companies', (err, resultC)=>{
				if (err){
					const error = new Error('Query error');
					error.status = 500;
					return next(error);
				}
				const response = {
					countArtists: resultA.rows.length,
					artists: resultA.rows.map(row =>{
						return {
							name: row.name,
							id: row.id,
							request: {
							type: 'GET',
							url: 'http://localhost:3000/artist/'+row.id //indirizzo hardcoddato!!!!
						}
						}
					}),
					countCompanies: resultC.rows.length,
					companies: resultC.rows.map(row =>{
						return {
							name: row.name,
							id: row.id,
							request: {
							type: 'GET',
							url: 'http://localhost:3000/company/'+row.id //indirizzo hardcoddato!!!!
						}
						}
					})
				};

				res.status(200).json(response);
			});
		});
	});
};