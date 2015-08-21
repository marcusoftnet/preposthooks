'use strict';
var should = require("should");
var fs = require("fs");
var lib = require("../");


describe("Some ridicoulus test", function () {

    it("has no files in the logs directory", function (done) {
        fs.existsSync(lib.logFilePath).should.equal(false);
        done();
    });

    it("calls a function that creates logs", function (done) {
        lib.logIt("Testing");
        done();
    });
});