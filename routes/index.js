const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(vendorController.getVendors));
router.get('/vendors', catchErrors(vendorController.getVendors));
router.get('/add', vendorController.addVendor);
router.post('/add', catchErrors(vendorController.createVendor));
router.get('/vendors/:id/edit', catchErrors(vendorController.editVendor));
router.post('/add/:id', catchErrors(vendorController.updateVendor));
router.get('/vendors/:slug', catchErrors(vendorController.getVendor));
module.exports = router;
