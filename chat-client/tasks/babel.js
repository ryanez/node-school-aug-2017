module.exports = function (grunt) {
    var config = {
        babel: {
            options: {
                sourceMap: false,
                minified: false,
                compact: false,
                presets: ['babel-preset-es2015', 'react']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    dest: 'public',
                    ext: '.js'
                }]
            }
        }
    };

    grunt.config.merge(config);
};
