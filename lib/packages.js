var shell = require('shelljs');

const CMD = {
	install: "npm install"
}

const PKG = {
	typescript: "typescript",
	typings: "typings"
}

const FLAGS = {
	global: '-g',
	save: '--save-dev'
};


var installPackage = {
	typescript: function() {
		this.execute(CMD.install, PKG.typescript, [FLAGS.global, FLAGS.save]);
	},
	typings: function() {
		this.execute(CMD.install, PKG.typings, [FLAGS.save]);
	},
	execute: function(cmd, pkg, flags) {
		flags = flags || [];
		shell.exec(cmd + ' ' + pkg + ' ' + flags.join(' '));
	}
};

module.exports = installPackage;