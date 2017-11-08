const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(memberController.getStaff));
router.get('/staff', catchErrors(memberController.getStaff));
router.get('/staff/add', memberController.addMember);
router.post(
  '/staff/add',
  memberController.upload,
  catchErrors(memberController.resize),
  catchErrors(memberController.createMember)
);
router.get('/staff/:id/edit', catchErrors(memberController.editMember));
router.post(
  '/staff/:id/edit',
  memberController.upload,
  catchErrors(memberController.resize),
  catchErrors(memberController.updateMember)
);
router.get('/staff/:slug', catchErrors(memberController.getMember));
router.get('/test', memberController.test);
module.exports = router;
