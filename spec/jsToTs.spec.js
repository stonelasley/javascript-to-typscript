var jsToTs = require('../lib/js-to-ts');

describe("JsToTs", function() {

	describe('filter', function() {

		beforeEach(function() {
			spyOn(jsToTs, 'multiMatch');
		});

		it('should call multiMatch', function() {

			jsToTs.filter([], "");
			expect(jsToTs.multiMatch).toHaveBeenCalled();
		});

		it('should call multiMatch with with default js glob pattern when non specified', function() {

			jsToTs.filter([]);
			expect(jsToTs.multiMatch).toHaveBeenCalledWith([], jsToTs.DEFAULT_PATTERN.concat(jsToTs.GLOBAL_IGNORE));
		});
	});

	describe('renameFiles', function() {

		beforeEach(function() {
			spyOn(jsToTs, 'renameSync');
		})

		it('should call renameSync', function() {

			var input = ['a.js'];

			jsToTs.renameFiles(input);

			expect(jsToTs.renameSync).toHaveBeenCalled();
		});

		it('should call renameSync with target and source', function() {

			var source = 'a.js',
				target = 'a.ts';

			jsToTs.renameFiles([source]);

			expect(jsToTs.renameSync).toHaveBeenCalledWith(source, target);
		});

		it('should rename .ts files to .js', function() {

			var input = ['a.js', 'b.js', 'c.js'],
				expected = ['a.ts', 'b.ts', 'c.ts'];

			var actual = jsToTs.renameFiles(input);

			expect(actual).toEqual(expected);
		});
	});

	describe('getJsFiles', function() {

		it('should call walkSync', function() {

			spyOn(jsToTs, 'walkSync');

			jsToTs.getJsFiles('');

			expect(jsToTs.walkSync).toHaveBeenCalled();
		});

		it('should call filter', function() {
			var expected = ['/dir/a.js', '/dir2/b.js'],
				pattern = 'pattern';
			spyOn(jsToTs, 'walkSync').and.returnValue(expected);
			spyOn(jsToTs,'filter');

			jsToTs.getJsFiles('', pattern);

			expect(jsToTs.filter).toHaveBeenCalledWith(expected, pattern);
		});

	});
});
