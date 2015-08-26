module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= srcConfig.src %>',
                dest: '<%= srcConfig.dist %>',
                src: [
                    'index.html',
                    //'images/*', //commented as other tasks are resposible for coping images
                    'views/**/*.html',
                    'js/scripts.js',
                    'js/lib/**/*.js',
                    'fonts/**/.*'
                ]
            }, {
                expand: true,
                cwd: '<%= srcConfig.server %>/images',
                dest: '<%= srcConfig.dist %>/images',
                src: ['sprite/*', 'logos/*']
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist',
                src: 'js/bootstrap.min.js',
                dest: '<%= srcConfig.dist %>'
            }, {
                expand: true,
                cwd: 'bower_components/jquery/dist',
                src: 'jquery.min.js',
                dest: '<%= srcConfig.dist %>/js'
            }, {
                expand: true,
                cwd: 'bower_components/bootstrap/dist',
                src: 'fonts/*',
                dest: '<%= srcConfig.dist %>'
            }
        ]
    }
};