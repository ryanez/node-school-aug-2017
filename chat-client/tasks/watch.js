module.exports = function (grunt) {
    var config = {
			watch: {
				ui: {
					files: [
						'src/**/*.js'
					],
					tasks: ['babel'],
					options: {
						livereload: true
					}
				}
			}
		};

    grunt.config.merge(config);
};