const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(memberController.getStaff));
router.get('/staff', catchErrors(memberController.getStaff));
router.get('/staff/add', memberController.addMember);
router.post('/staff/add', catchErrors(memberController.createMember));
router.get('/staff/:id/edit', catchErrors(memberController.editMember));
router.post('/staff/:id/edit', catchErrors(memberController.updateMember));
router.get('/staff/:id', catchErrors(memberController.getMember));

module.exports = router;
