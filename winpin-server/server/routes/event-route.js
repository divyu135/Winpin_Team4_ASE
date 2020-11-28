// import dependencies and initialize the express router
const express = require("express");
const EventController = require("../controllers/event-controller");

const router = express.Router();

// define routes
router.get("", EventController.getEventList);

module.exports = router;
