// import dependencies and initialize the express router
const express = require("express");
const OrgController = require("../controllers/org-controller");

const router = express.Router();

// define routes
router.post("", OrgController.setOrganization);

module.exports = router;
