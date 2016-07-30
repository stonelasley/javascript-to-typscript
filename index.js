'use strict';

var path = require('path'),
	fs = require('fs'),
	walkSync = require('walk-sync'),
	cLA = require('command-line-args'),
	multiMatch = require('multimatch'),
	startingDir = '',
	verbose = false;

const EXT = {
	js: '.js',
	ts: '.ts'
};

const GLOBAL_IGNORE = [
	'!**/node_modules/**',
	'!**/bower_components/**'
];

const DEFAULT_FILTER = ['**/*.js'];

const ARGS = cLA([
	{name: 'startPath', alias: 'd', type: String, defaultOption: true},
	{name: 'filter', alias: 'f', type: String, multiple: true},
	{name: 'verbose', alias: 'v', type: Boolean}
]);

var log = function(heading, value) {
	if(verbose) {
		console.log(heading, value);
	}
}
var filter = function (files, pattern) {
	var _filter = pattern|| DEFAULT_FILTER;
	return multiMatch(files, _filter.concat(GLOBAL_IGNORE));
}

var renameFile = function(source) {
	var newName = source.replace(EXT.js, EXT.ts);
	fs.renameSync(path.resolve(startingDir, source), path.resolve(startingDir, newName));
};

var _jsToTs = function(dir, pattern) {
	var files = walkSync(dir);
	var filtered = filter(files, pattern);

	log('Processing Files:', filtered);

	filtered.forEach(function(file) {
		renameFile(file);
	});
	return filtered;
};

var jsToTs = function () {
	startingDir = path.resolve(process.cwd(), ARGS.startPath);
	verbose = ARGS.verbose || true;
	console.log('Migrating .js files to .ts');
	var files = _jsToTs(ARGS.startPath, ARGS.filter);
	console.log('Renaming complete. files ');

}

module.exports = jsToTs;