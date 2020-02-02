const http = require('http');
const app = require('./app');

process.env.TZ=0;

const port = process.env.PORT || 3000;
const root = process.env.ROOT_URL || 'http://localhost:3000/';
const connect = process.env.DATABASE_URL || "postgress://Rob:ciao@localhost/Hypepperony";

const server = http.createServer(app);

server.listen(port, ()=>{console.log('server started on port ' + port)});

module.exports.connectString = connect;
module.exports.root = root;