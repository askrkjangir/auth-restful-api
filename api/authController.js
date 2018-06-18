/**
 * This module contains all the functions to handle requests such as login, register 
 * and requests related to user profile.
 */

var jwt = require('jsonwebtoken');
var config = require('../config/env'); // get config file
var userController = require('../services/userController'); // get user controller

/**
 * Define module
 */
var AuthController = {

    /**
     * Login controller for handling login request
     * @param req Http request
     * @param res Http response
     */
    login: function (req, res) {
        // get parameters        
        var email = req.body.email || '';
        var password = req.body.password || '';
        // validate parameters
        if (email == '' || password == '')
            return res.status(401).json({ auth: false, message: 'Invalid email or password!' });
        // validate user credential
        var user = userController.authenticate(email, password, function (err, data) {
            if (err) {
                res.status(200).json({ error: true, message: 'Something went wrong!' });
            } else if (!data) {
                // if login credential are not matched or found
                return res.status(401).json({ auth: false, message: 'Invalid email or password!' });
            } else {
                var user = {
                    id: data[0].id,
                    name: data[0].name,
                    email: data[0].email,
                    role: data[0].role
                };
                // user is authenticated, now generate access token                
                var token = jwt.sign(user, config.secret, { expiresIn: config.tokenExpireIn });
                // send response back to client
                res.status(200).json({ auth: true, token: token });
            }
        });
    },

    /**
     * Get user profile
     */
    getProfile: function (req, res) {
        var user = userController.findById(req.auth.id, function (err, data) {
            if (err) {
                res.status(200).json({ error: true, message: 'Something went wrong!' });
            } else if (!data) {
                res.status(200).json({ error: true, message: 'User not found!' });
            } else {
                res.status(200).json({ success: true, user: data[0] });
            }
        });
    }
}

// export this module
module.exports = AuthController;