const http = require('http');
const app = require('./app');

process.env.TZ=0;

const port = process.env.PORT || 3000;

const connect = process.env.connectString || "postgress://"+process.env.POSTGRESS_USER+":"+process.env.POSTGRESS_PW+"@localhost/Hypepperony";

const server = http.createServer(app);

server.listen(port, ()=>{console.log('server started on port ' + port)});

module.exports.connectString = connect;