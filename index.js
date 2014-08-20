var hbs = require('gulp-handlebars');
var define = require('gulp-define-module');
var declare = require('gulp-declare');
var rename = require('gulp-rename');

module.exports = function(glob, namespace) {
	return {
		name: 'handlebars',
		output: 'scripts',
		glob: glob,
		streamer: function(input) {
			return input.pipe(hbs())
				.pipe(define('plain'))
				.pipe(declare({namespace: namespace}))
				.pipe(rename(function(path) {
					path.dirname = 'templates/'+ path.dirname;
				}));
		}
	};
};