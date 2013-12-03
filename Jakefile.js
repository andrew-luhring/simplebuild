// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
"use strict";

var addHeader = require("./examples/simplebuild-ext-header.js").addHeader;
var jakeify = require("./extensions/simplebuild-ext-jakeify.js").wrap;

var jshint = jakeify(addHeader(require("./tasks/simplebuild-jshint.js")));
var mocha = jakeify(addHeader(require("./tasks/simplebuild-mocha.js")));

task("default", ["lint", "test"], function() {
	console.log("\n\nOK");
});

desc("Lint everything");
jshint.validate.task("lint", {
	files: ["build.js", "tasks/simplebuild-jshint.js", "examples/run-barebones.js"],
	options: lintOptions(),
	globals: {}
});

desc("Test everything");
mocha.runTests.task("test", [], {
	files: ["tasks/jshint/_jshint_runner_test.js"]
});

function lintOptions() {
	return {
		bitwise: true,
		curly: false,
		eqeqeq: true,
		forin: true,
		immed: true,
		latedef: false,
		newcap: true,
		noarg: true,
		noempty: true,
		nonew: true,
		regexp: true,
		undef: true,
		strict: true,
		trailing: true,
		node: true
	};
}