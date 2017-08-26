module.exports = function (grunt) {
    var config = {
        concurrent: {
            dev: {
                tasks: ['connect:server:keepalive', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    };

    grunt.config.merge(config);
};
