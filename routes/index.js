const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', vendorController.homePage);
router.get('/add', vendorController.addVendor);
router.post('/add', catchErrors(vendorController.createVendor));

module.exports = router;
