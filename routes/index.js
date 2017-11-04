const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(vendorController.getVendors));
router.get('/staff', catchErrors(vendorController.getVendors));
router.get('/staff/add', vendorController.addVendor);
router.post('/staff/add', catchErrors(vendorController.createVendor));
router.get('/staff/:slug/edit', catchErrors(vendorController.editVendor));
router.post('/staff/:slug/edit', catchErrors(vendorController.updateVendor));
router.get('/staff/:slug', catchErrors(vendorController.getVendor));
module.exports = router;
