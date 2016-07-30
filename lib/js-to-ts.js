'use strict';

var path = require('path'),
	_fs = require('fs'),
	_multiMatch = require('multimatch'),
	_installPackage = require('./packages'),
	_walkSync = require('walk-sync'),
	cLA = require('command-line-args'),

	projectRoot,
	startingDir = '';

const FILES = {
	templateDir: '../templates',
	tsconfig: 'tsconfig.json',
	typings: 'typings.json',
	extensions: {
		js: '.js',
		ts: '.ts'
	}
};

const GLOBAL_IGNORE = [
	'!**/node_modules/**',
	'!**/bower_components/**'
];

const DEFAULT_FILTER = ['**/*.js'];

const ARGS = cLA([
	{name: 'startPath', alias: 'p', type: String, defaultOption: true},
	{name: 'filter', alias: 'f', type: String, multiple: true},
	{name: 'dryRun', alias: 'd', type: Boolean}
]);

var jsToTs = {
	DEFAULT_PATTERN: DEFAULT_FILTER,
	GLOBAL_IGNORE: GLOBAL_IGNORE,
	FILES: FILES,
	main: function () {
		projectRoot = path.resolve(process.cwd());
		startingDir = path.resolve(projectRoot, ARGS.startPath);
		console.log('Migrating .js files to .ts');
		var files = this.getJsFiles(ARGS.startPath, ARGS.filter);
		if (!ARGS.dryRun === false) {
			this.renameFiles(files);
			this.installPackage.typescript();
			this.installPackage.typings();
			this.createReadStream(path.resolve(__dirname, FILES.templateDir, FILES.tsconfig), FILES.tsconfig)
			this.createReadStream(path.resolve(__dirname, FILES.templateDir, FILES.typings), FILES.typings)
		} else {
			console.log('Files to Migrate: ', files);
		}

		console.log('Migration to TS Complete')
	},
	getJsFiles: function (dir, pattern) {
		var files = this.walkSync(dir);
		return this.filter(files, pattern);
	},
	renameFiles: function (sources) {
		var _this = this,
			renamed = [];
		sources.forEach(function (source) {
			var target = source.replace(FILES.extensions.js, FILES.extensions.ts);
			_this.renameSync(source, target);
			renamed.push(target);
		});
		return renamed;
	},
	filter: function (files, pattern) {
		var _filter = pattern || DEFAULT_FILTER;
		return this.multiMatch(files, _filter.concat(GLOBAL_IGNORE));
	},
	multiMatch: function (paths, pattern) {
		return _multiMatch(paths, pattern);
	},
	createReadStream: function (source, target) {
		_fs.createReadStream(source).pipe(_fs.createWriteStream(target));
	},
	renameSync: function (source, target) {
		_fs.renameSync(path.resolve(startingDir, source), path.resolve(startingDir, target));
	},
	walkSync: function(dir) {
		return _walkSync(dir);
	},
	installPackage: _installPackage,
};

module.exports = jsToTs;