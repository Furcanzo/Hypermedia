const {Client} = require ('pg');
const connect = require('../../server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

exports.userSignUp = (req, res, next)=>{
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
				client.query('INSERT INTO users_web (email, password, admin)' +
					'VALUES(\''+req.body.eMail+'\',\'' + hash +'\',\''+false+'\')', (err, result)=>{
					if (err){
						const error = new Error('Email already registered');
						error.status = 401;
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

exports.userLogin = (req, res, next)=>{
	const client = new Client({
		connectionString: connect.connectString
	});
	client.connect((err, client, done)=>{
		if (err){
			const error = new Error('Cannot connect to DataBase');
			error.status = 500;
			return next(error);
		}
		client.query('SELECT * FROM users_web WHERE email = \''+req.body.eMail +'\'' , (err, result)=>{
			if (err){
				const error = new Error('Query error');
				error.status = 500;
				return next(error);
			}
			if(result.rows.length>0) {
				const user = result.rows[0];
				bcrypt.compare(req.body.password, user.password, (err, result) => {
					if (result && req.body.eMail === user.email) {
						const token = jwt.sign({
								email: user.email,
								id: user.id,
								admin: user.admin
							},
							process.env.JWT_KEY,
							{
								expiresIn: '3h'
							});
						const response = {
							message: "Auth Successful",
							token: token
						};
						return res.status(200).json(response);
					} else {
						const error = new Error('Authentication failed');
						error.status = 401;
						return next(error);
					}
				});
			}else{
				const error = new Error('Authentication failed');
				error.status = 401;
				return next(error);
			}
		});

	});
};

exports.userCreateAdmin = (req, res, next)=>{
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
				client.query('INSERT INTO users_web (email, password, admin)' +
					'VALUES(\''+req.body.eMail+'\',\'' + hash +'\',\''+true+'\')', (err, result)=>{
					if (err){
						const error = new Error('Email already registered');
						error.status = 401;
						return next(error);
					}
					res.status(201).json({
						message: 'admin added'
					});
				});
			}
		});

	});
};

exports.userChangePassword = (req, res, next)=>{
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
				client.query('UPDATE users_web SET password = \''+hash+'\' WHERE id = '+req.userData.id, (err, result)=>{
					if (err){
						const error = new Error('Query error');
						error.status = 500;
						return next(error);
					}
					res.status(201).json({
						message: 'Password changed'
					});
				});
			}
		});

	});
};