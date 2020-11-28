// // import dependencies and initialize express
// const express = require('express');
const path = require('path');
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

const express = require('express')
const app = express()

// serve the react app files
console.log(path.join(__dirname, '../winpin'));
app.use(express.static(path.join(__dirname, '../winpin-ui')));
app.get('/api/hello', function(req,res) {
	res.json({message:"Hello World"});
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('server listening on port ' + port)
})
