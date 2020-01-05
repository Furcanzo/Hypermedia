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
								id: user.id
							},
							"MIIEowIBAAKCAQEAts37yFhIbjDKFIqbjr9F+ZK3t8Lh7xJdelJOj6M6fM04ONLE" +
							"Bl1F0ugfWvZ5D/RNtgrLW1/Xzq/oqmTr31/Gcojd56RtFehvojF5+gQ5sVJfX9dX" +
							"J5Qqlq+e9RZT89z+/a7x+Y5pW87f9Z87PEzdFYWThDyc/TAelxXMiH/i2z5UbePw" +
							"z6p7kjj66Rvq5zryRROpwhAbyVRzlmxcV+/OmgV9mywjDCp/Vb2jjS1KyMbHH4W3" +
							"JwOthT7grrJzs0ogkyeqbMQ8ypFXaxS7StmOK86TKwIfA7we6zbTiApTJx7e2WdS" +
							"qgeysjnEr5qyx9tl5e3qW+18GBQ4FsqxObx57wIDAQABAoIBAGEYw9XEXqR4sb17" +
							"aejGW+qWLZMjplIP1Sr1sNjGgHhtoKE+AfTHciD2PkFYjTEWOHiq/xzHqZ8U/GYV" +
							"ONvqyUNow0UYpwBt922VDg7oU6SF9ja38IkLQBvNqIbRl0H+bkpctBYzuG6VUYvr" +
							"SdFbmkqmKpagg1pQRs9FOuB93QdKC9QUSOChlDjePtulkgeDOMbVg8RJfC3cen1S" +
							"yxLWA5z9BOVAXDwdopbMufV/60krbL6h1dVXoZGjslFQqH6V+3HXtYJX5fUHJVLd" +
							"zAdXLTHMpVysb95Y8dpJlgk8xKYrqACMOg91Basabn2apQ7sdjiv2g9iznqnWN64" +
							"trMmKuECgYEA5omhd5HGzvLpY0YQmyB6POM4aJjNpjRmjmTW54gbNkEA7HMGLIHW" +
							"T1vZ4HJxMgIUPFb+vqVcD+CBfljtNmT8wgdotOHz8gruiZRxBChzNPq6bE69Do89" +
							"X4W+cDSRe60HK+0/PMlrho5oiAGoOpckIE+UKTQ5sXUbhoYNPi/3GckCgYEAyv64" +
							"IkdjO/AWClG328NcUkqOYkk2N+3K7kjyMKBX+2qPcdr2yD/ccOVY2apdBAtDSc0V" +
							"I4yhlCHts5s3aFknTcAKY4CB5NeDqeuexEpAMNqjdkp3exITOkawjptcYbqpCBFp" +
							"TFDIfszgCWQWfEwP+Ek/oHqE32irJ4L9oF7aUfcCgYBJa7vI4Nx4PFSoEUBop0dG" +
							"7PaiGUgljrq6ztLCmk5QUROCOn/U3OTsEUyqdsgmLRNUxEANZ4ySYeXb32Zs1GzL" +
							"PqDSOsP+agzeNDBqKpfGX7PPmqQLZwMc0PN9uMA8qzaFfuGM8nkUOXaBGkYBovEW" +
							"eUGufbuCENHbXgYJsCz6QQKBgQC+P8h3aAybKkKd3UTB1PD7tyCHATKtbFIazYcf" +
							"B8gtvAtAnAVaXG/P50NEjSSsG5ou2uSK8syktr++6yQcyiHJ/sg9xTz4KvwdDtU4" +
							"BpbuspsszFH6qFAY+BOVNAp7FaRCCX90pOmj3YPDiWiBihAVlSDq2KkbcU+nsl7e" +
							"JMfctQKBgEPCN2oE8Ry1Md+vdMuFXG03plls8cd6UCwE5OszIgRH9T20+H9wIn8z" +
							"AlUDPgSKGUjpj3DUIc+GgJbzU3rLPtOVRC3N/eis/CsO2/6jX9Vj2N2vRBU5bp50" +
							"4AKyc/i21aYdY4cGcGbL6IXuPEObPg2doJumidv0UWdu24bw3uBN",
							{
								expiresIn: '1h'
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