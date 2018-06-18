/**
 * This module provides methods to access user data and user authentication.
 * I have used array for storing user record, it should be replaced with database.
 * 
 */

var connectionFactory = require('../utils/connectionFactory');

/**
 * Define user authentication operations
 * @class
 */
var usercontroller = function () { };

/**
 * Get a user record for provided user id
 * @param id Id of the user
 * @param callback Callback function
 */
usercontroller.prototype.findById = function (userId, callback) {
    var findUserQuery = 'SELECT id,full_name as `name`,email,role FROM users WHERE id=?';
    var params = [userId];
    connectionFactory.getConnection(function (err, connection) {
        if (err) {
            callback(true, null);
        } else {
            connection.query(findUserQuery, params, function (err, rows, fields) {
                if (err) {
                    connection.release();
                    callback(true, null);
                } else {
                    connection.release();
                    callback(null, rows);
                }
            });
        }

    });
}

/**
 * Authenticate users login credentials
 * @param email Email of the user
 * @param password Password of the user
 * @param callback Callback function
 */
usercontroller.prototype.authenticate = function (email, password, callback) {
    var authQuery = 'SELECT u.id,u.full_name as `name`,u.email,u.role FROM users u, auth a WHERE u.id=a.user_id AND u.email=? AND a.md5passwd=md5(?)';
    var params = [email, password];
    connectionFactory.getConnection(function (err, connection) {
        if (err) {
            callback(true, null);
        } else {
            connection.query(authQuery, params, function (err, rows, fields) {
                if (err) {
                    connection.release();
                    callback(true, null);
                } else {
                    connection.release();
                    callback(null, rows);
                }
            });
        }

    });
}

module.exports = new usercontroller();