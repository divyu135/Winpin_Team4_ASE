// import dependencies and initialize the express router
const express = require("express");
const EventInfoController = require("../controllers/eventInfo-controller");

const router = express.Router();

// define routes
router.post("", EventInfoController.setEvent);

module.exports = router;
