const express = require('express');
var UserController = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);

module.exports = router;