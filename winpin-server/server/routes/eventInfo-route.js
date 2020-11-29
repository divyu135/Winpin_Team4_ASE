const express = require("express");
var ibmdb = require("ibm_db");
const EventInfoController = require("../controllers/eventInfo-controller");
const insertEvent = require("../database/routes/insertEvent");

const router = express.Router();
const db2 = {
    db: "BLUDB",
    hostname: "dashdb-txn-sbox-yp-lon02-06.services.eu-gb.bluemix.net",
    port: 50000,
    username: "ssg47540",
    password: "c4plzs7h2kpjt0@2",
  };
const connString =
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
// define routes
// router.post("", EventInfoController.setEvent);
router.post("", insertEvent.insertEventsDB(ibmdb,connString));

module.exports = router;