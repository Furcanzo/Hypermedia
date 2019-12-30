const {Client} = require ('pg');
const connect = require('../../server');
const bcrypt = require('bcrypt');

exports.userGetAll = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('SELECT * FROM users_web', (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			res.status(200).json({
				users: result.rows
			});
			
		});
	});
};

exports.userPost = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		bcrypt.hash(req.body.password, 10, (err, hash)=>{
			if (err){
				const error = new Error('Hashing error');
				error.status = 500;
				return next(error);
			}else {
				console.log(hash);
				client.query('INSERT INTO users_web (email, password, admin)' +
					'VALUES(\''+req.body.eMail+'\',\'' + hash +'\',\''+false+'\')', (err, result)=>{
					if (err){
						const error = new Error('Query error');
						error.status = 500;
						return next(error);
					}
					res.status(201).json({
						message: 'user added'
					});
				});
			}
		});

	});
};