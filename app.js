var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config/env');

/** 
 * Create express app
 */
var app = express();

/**
 * Setup body parser
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Set up logger
 */
app.use(morgan('dev'));

app.use('/', require('./api'));

app.get("/", function (req, res) {
    res.json({ message: "Express is up!" });
});


/**
 *  Setup the server
 */
app.set('port',  config.port || 3000)
var server = app.listen(app.get('port'), function () {
    console.log('Express server is listening on port ' + server.address().port);
});
