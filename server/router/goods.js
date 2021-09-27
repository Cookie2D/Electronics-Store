const express = require('express');
const router = express.Router();
const controllerGoods = require('../controllers/goods');


router.get("/:categories", controllerGoods.getCategories);
router.get("/:categories/:id", controllerGoods.getGoods);

module.exports = router;