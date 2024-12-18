const express = require('express');
const router = express.Router();
const controller = require('../controller/speedTest.controller')

/* GET home page. */
router.get('/speed', controller.getSpeedTest);


module.exports = router;
