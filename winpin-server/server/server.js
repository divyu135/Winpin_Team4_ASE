// // import dependencies and initialize express
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // var corsOptions = {
// //   origin: '103.238.108.54:5000',
// //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// // }

// const healthRoutes = require('./routes/health-route');
// const swaggerRoutes = require('./routes/swagger-route');
// const helloRoutes = require('./routes/hello-route');

// const app = express();

// app.use(cors);
// 
// // enable parsing of http request body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // routes and api calls
// app.use('/health', healthRoutes);
// app.use('/swagger', swaggerRoutes);
// app.use('/hello', helloRoutes);

// // default path to serve up index.html (single page application)
// app.all('', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// // start node server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App UI available http://localhost:${port}`);
//   console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
// });

// app.get('/api/hello', function(req, res) {
//   res.send('test');
// });

// // error handler for unmatched routes or api calls
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public', '404.html'));
// });

// module.exports = app;

// const express = require('express')
// var routes = require('./database/routes');

var express = require('express');
var http = require('http');
var path = require('path');
var ibmdb = require('ibm_db');

const app = express()

// connecting to IBM DB2 database

//setting up database routes

const listSysTables = require('./database/routes/hello-route');


app.set('views', path.join(__dirname, 'database','views'));
app.set('view engine', 'jade');

var db2;
var hasConnect = false;

if ( hasConnect == false ) {

   db2 = {
        db: "BLUDB",
        hostname: "dashdb-txn-sbox-yp-lon02-06.services.eu-gb.bluemix.net",
        port: 50000,
        username: "ssg47540",
        password: "c4plzs7h2kpjt0@2"
     };
}

var connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;

//making connection
app.get('/db2', listSysTables(ibmdb,connString));


// serve the react app files
// console.log(path.join(__dirname, '../winpin'));
app.use(express.static(path.join(__dirname, '../winpin-ui')));
app.get('/api/hello', function(req,res) {
	res.json({message:"Hello World"});
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('server listening on port ' + port)
})
