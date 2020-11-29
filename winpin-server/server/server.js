// // import dependencies and initialize express
// const express = require('express');
// const path = require('path');
const bodyParser = require("body-parser");
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

var express = require("express");
var http = require("http");
var path = require("path");
var ibmdb = require("ibm_db");

const app = express();

// connecting to IBM DB2 database

//setting up database routes


app.set("views", path.join(__dirname, "database", "views"));
app.set("view engine", "jade");

var db2;
var hasConnect = false;

if (hasConnect == false) {
  db2 = {
    db: "BLUDB",
    hostname: "dashdb-txn-sbox-yp-lon02-06.services.eu-gb.bluemix.net",
    port: 50000,
    username: "ssg47540",
    password: "c4plzs7h2kpjt0@2",
  };
}

var connString =
  "DRIVER={DB2};DATABASE=" +
  db2.db +
  ";UID=" +
  db2.username +
  ";PWD=" +
  db2.password +
  ";HOSTNAME=" +
  db2.hostname +
  ";port=" +
  db2.port;

// Test systables
const listSysTables = require("./database/routes/listSysTables");
// Select data from tables
const eventsRoute = require("./database/routes/getEvents");
const orgsRoute = require("./database/routes/getOrgs");
// Insert data to tables
const eventInsertRoutes = require("./routes/eventInfo-route");
const orgInsertRoutes = require("./routes/eventInfo-route");


//making connection
app.get("/db2", listSysTables.listSysTables(ibmdb, connString));
app.get("/events-db", eventsRoute.getEventsDB(ibmdb,connString));
app.get("/orgs-db", orgsRoute.getOrgDB(ibmdb,connString));
// app.use("/insert-event-db", eventInsertRoutes);
app.use("/insert-org-db", orgInsertRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve the react app files
// console.log(path.join(__dirname, '../winpin'));
app.use(express.static(path.join(__dirname, "../winpin-ui")));


// Handling api calls from winpin client
const eventListRoutes = require("./routes/event-route");
const orgRoutes = require("./routes/org-route");
const eventInfoRoutes = require("./routes/eventInfo-route");

// Handling scrapping events
app.use("/event_list", eventListRoutes);
app.use("/insert-event-db", eventInfoRoutes);

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("server listening on port " + port);
  console.log("Open http://localhost:"+ port)
});

const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require('dotenv').config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

app.get('/token', (req, res) => {
  const { identity, roomName } = req.query;
  const token = new AccessToken(twilioAccountSid, twilioApiKeySID, twilioApiKeySecret, {
    ttl: MAX_ALLOWED_SESSION_DURATION,
  });
  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);
  res.send(token.toJwt());
  console.log(`issued token for ${identity} in room ${roomName}`);
});

app.get('/token/password', function(req, res) {
  res.send('test');
});

