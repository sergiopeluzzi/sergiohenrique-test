const express = require('express');
const UserController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/', auth, UserController.createUser);
router.post('/admin', auth, UserController.createAdminUser);

module.exports = router;