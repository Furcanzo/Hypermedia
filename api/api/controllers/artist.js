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