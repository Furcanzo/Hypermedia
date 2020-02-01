const {Client} = require ('pg');
const connect = require('../../server');

exports.getPreview = (req, res, next)=>{
    const client = new Client({
        connectionString: connect.connectString
    });
    client.connect((err, client)=>{
        if (err){
            const error = new Error('Cannot connect to DataBase');
            error.status = 500;
            return next(error);
        }
        const id = req.params.id;
        let type;
        switch (req.params.type) {
            case 'artisticEvent':
                type = 'events_id';
                break;
            case 'artist' :
                type = 'artists_id';
                break;
            case 'company' :
                type = 'companies_id';
                break;
            case 'seminar' :
                type = 'seminar_id';
                break;
        }
        client.query('SELECT photo FROM galleries WHERE '+ type + '= ' + id + 'ORDER BY photo DESC', (err, result)=>{
            if (err){
                const error = new Error('Query error');
                error.status = 500;
                return next(error);
            }
            if(result.rows[0] === undefined) {
                const error = new Error('Photo not found');
                error.status = 404;
                return next(error);
            }else {
                res.sendFile(result.rows[0].photo, {root: __dirname + '/../../uploads'});
            }
        });
    });
};

exports.getRequestList = (req, res, next)=>{
    const client = new Client({
        connectionString: connect.connectString
    });
    client.connect((err, client)=>{
        if (err){
            const error = new Error('Cannot connect to DataBase');
            error.status = 500;
            return next(error);
        }
        const id = req.params.id;
        let type;
        switch (req.params.type) {
            case 'artisticEvent':
                type = 'events_id';
                break;
            case 'artist' :
                type = 'artists_id';
                break;
            case 'company' :
                type = 'companies_id';
                break;
            case 'seminar' :
                type = 'seminar_id';
                break;
        }
        client.query('SELECT id, photo FROM galleries WHERE '+ type + '= ' + id , (err, result)=>{
            if (err){
                const error = new Error('Query error');
                error.status = 500;
                return next(error);
            }

            const response = {
                photos: result.rows.map(row =>{
                    return {
                        id: row.id,
                        name: row.photo,
                        request: {
                            type: 'GET',
                            url: connect.root + 'photos/id/' + row.id
                        }
                    }
                })
            };
            res.status(200).json(response);
        });
    });
};

exports.getById = (req, res, next)=>{
    const client = new Client({
        connectionString: connect.connectString
    });
    client.connect((err, client)=>{
        if (err){
            const error = new Error('Cannot connect to DataBase');
            error.status = 500;
            return next(error);
        }
        const id = req.params.id;
        client.query('SELECT photo FROM galleries WHERE id= ' + id , (err, result)=>{
            if (err){
                const error = new Error('Query error');
                error.status = 500;
                return next(error);
            }
            if(result.rows[0] === undefined) {
                const error = new Error('Photo not found');
                error.status = 404;
                return next(error);
            }else {
                res.sendFile(result.rows[0].photo, {root: __dirname + '/../../uploads'});
            }
        });
    });
};

exports.patch = (req, res, next)=>{
    const client = new Client({
        connectionString: connect.connectString
    });
    client.connect((err, client)=>{
        if (err){
            const error = new Error('Cannot connect to DataBase');
            error.status = 500;
            return next(error);
        }
        const id = req.params.id;
        let type;
        switch (req.params.type) {
            case 'artisticEvent':
                type = 'events_id';
                break;
            case 'artist' :
                type = 'artists_id';
                break;
            case 'company' :
                type = 'companies_id';
                break;
            case 'seminar' :
                type = 'seminar_id';
                break;
        }
        client.query('INSERT INTO galleries (photo, '+ type + ') VALUES (\''+ req.file.filename+ '\' , ' + id + ')', (err, result)=>{
            if (err){
                const error = new Error('Query error');
                error.status = 500;
                return next(error);
            }
            res.status(201).json({
                message: 'Photo added'
            });
        });
    });
};

exports.getStaticAssets = (req, res, next)=>{
    const response = {
        assets: [
            {
                name: "background",
                request: {
                    type: 'GET',
                    url: connect.root + 'photos/background'
                }
            },
            {
                name: "logo",
                request: {
                    type: 'GET',
                    url: connect.root + 'photos/logo'
                }
            },

            {
                name: "icon",
                request: {
                    type: 'GET',
                    url: connect.root + 'photos/icon'
                }
            },
            {
                name: "genericArtisticEvent",
                request: {
                    type: 'GET',
                    url: connect.root + 'photos/genericArtisticEvent'
                }
            },
            {
                name: "genericPerformer",
                request: {
                    type: 'GET',
                    url: connect.root + 'photos/genericPerformer'
                }
            }

        ]

    };
    res.status(200).json(response);
};

exports.getStaticFile = (req, res, next)=>{
    let file;
    switch (req.params.asset) {
        case 'background':
            file = 'background.jpg';
            break;
        case 'logo' :
            file = 'logo_festival.png';
            break;
        case 'decorativeLine' :
            file = 'decorative_line.png';
            break;
        case 'icon' :
            file = 'favicon.ico';
            break;
        case 'genericArtisticEvent' :
            file = 'artistic_events.jpg';
            break;
        case 'genericPerformer' :
            file = 'performers.jpg';
            break;
        case 'genericSeminar' :
            file = 'seminars.jpg';
            break;
    }
    res.sendFile(file, {root: __dirname + '/../../staticAssets'});
};