// import dependencies and initialize the express router
const express = require('express');
const HelloController = require('../controllers/hello-controller');

const router = express.Router();

// define routes
router.get('', HelloController.getHealth);

module.exports = router;
