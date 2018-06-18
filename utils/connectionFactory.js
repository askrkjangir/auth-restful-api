var mysql = require('mysql');

/**
 * Define connection pool and configurations
 */
var pool = mysql. createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'auth_db',
    timezone: '+05:30',
    supportBigNumbers: true,
    dateStrings: true,
    connectionLimit: 10
});

// export the module
module.exports = pool;