'use strict'
var mongoose = require('mongoose');
var app = require("./app");

const URL = "mongodb://localhost:27017/schedule";
const PORT = 3700;
const DB = "schedule";

mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database " + DB);
        app.listen(PORT, () => {
            console.log("Running server on port " + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });