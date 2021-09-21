const express = require('express');
const authController = require('./auth.controller');

const router = express.Router();

router.post('/login', authController.login);
router.delete('/logout', authController.logout);
router.post('/refresh', authController.refresh);
router.put('/renew', authController.renew);

module.exports = router;
