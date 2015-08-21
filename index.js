'use strict';

var fs = require("fs");

var logFilePath = "./logs/log.txt";
module.exports.logFilePath = logFilePath;

module.exports.logIt = function (msg) {
    fs.writeFile(logFilePath, msg, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
};