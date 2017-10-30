const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

router.get('/', vendorController.homePage);
router.get('/add', vendorController.addVendor);
router.post('/add', vendorController.createVendor);

module.exports = router;
