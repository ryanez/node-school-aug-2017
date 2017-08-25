module.exports = function (grunt) {
	// Automatically load in all Grunt npm tasks
	require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);
    grunt.loadTasks('tasks');
};