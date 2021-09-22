const express = require('express');
const router = express.Router();
const controllerBanner = require('../controllers/banner');

router.get("/", controllerBanner.getBanner);

module.exports = router;