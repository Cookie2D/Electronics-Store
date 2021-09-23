const express = require('express');
const router = express.Router();
const controllerCategories = require('../controllers/catagories');

router.get("/", controllerCategories.getCategories);

module.exports = router;