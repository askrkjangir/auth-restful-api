/**
 * This module defines all the api routes
 */
var express = require('express');
var authController = require('./authController');
var auth = require('../interceptors/auth');

/**
 * Define router
 */
var router = express.Router();

/**
 * Define api routes
 */
router.post('/api/v1/login', authController.login);
router.get('/api/v1/profile', auth([1, 2]), authController.getProfile);

// export this module
module.exports = router;