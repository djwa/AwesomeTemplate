'use strict';
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        srcConfig: {
            src: require('./bower.json').srcPath || 'src',
            dist: 'build',
            server: '.tmp'
        }
    };
    config = require('load-grunt-configs')(grunt, config);
    grunt.initConfig(config);

    grunt.registerTask('update', 'install the backend and frontend dependencies', function () {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('bower update', null, function (err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
    });

    grunt.registerTask('prepare-graphics', [
        'responsive_images:icons',
        'responsive_images:logos',
        'sprite:icons22',
        'sprite:icons30',
        'sprite:icons44',
        'sprite:icons88'
    ]);

    grunt.registerTask('build', [
        'autoprefixer', // css postprocessor for prefixes
        'clean:dist', // clean build from old empty directories
        'prepare-graphics', // sprites images *has to be before less compilation
        'imagemin', // minify images
        'modernizr:dist', // minify images
        'copy:dist', // copy files
        'less:development', // less compiler
        //'useminPrepare', // prepares the configuration to transform specific blocks
        'usemin', //replaces the blocks by the file they reference
        'manifest', // generates manifest file
        'processhtml' // process html files at build time to modify them depending on the release environment
    ]);

    grunt.registerTask('serve', [
        //'update',
        'connect:dist',
        'watch'
    ]);

};