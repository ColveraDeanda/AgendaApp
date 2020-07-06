'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express()

// Routes to import
var task = require('./routes/task.route');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// MiddleWares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Initialize Routes
app.use('/api', task);


module.exports = app