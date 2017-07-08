"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var request = require("request");
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var options = {
    method: 'GET',
    url: 'https://feeds.divvybikes.com/stations/stations.json'
};
var apiResponse;
var divvyResponse;
app.get('/', function (req, res) {
    request(options, function (error, response, body) {
        apiResponse = JSON.parse(body);
        if (error) {
            res.send(error);
        }
        else {
            res.send(apiResponse.executionTime);
        }
    });
});
app.listen(4000, function () {
    console.log("Listening on port 4000");
});
