const express = require('express');
const router = express.Router();
const controllerGoods = require('../controllers/goods');

router.get("/laptops", controllerGoods.getLaptops);
router.get("/phones", controllerGoods.getPhones);
router.get("/printers", controllerGoods.getPrinters);
router.get("/screens", controllerGoods.getScreens);

module.exports = router;