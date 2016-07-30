var installPackages = require('../lib/packages');

describe("Install Package", function() {

	beforeEach(function() {
		spyOn(installPackages, 'execute');
	});

	describe("typescript", function() {

		it('should call execute', function() {

			installPackages.typescript();
			expect(installPackages.execute).toHaveBeenCalled();
		})

		it('should call execute with correct parameters', function() {

			installPackages.typescript();
			expect(installPackages.execute).toHaveBeenCalledWith('npm install', 'typescript', ['-g', '--save-dev']);
		})
	});

	describe("typings", function() {

		it('should call execute', function() {

			installPackages.typings();
			expect(installPackages.execute).toHaveBeenCalled();
		})

		it('should call execute with correct parameters', function() {

			installPackages.typings();
			expect(installPackages.execute).toHaveBeenCalledWith('npm install', 'typings', ['--save-dev']);
		})
	});
});
