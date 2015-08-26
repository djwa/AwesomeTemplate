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
                    'fonts/**/.*'
                ]
            }, {
                expand: true,
                cwd: '<%= srcConfig.server %>/images',
                dest: '<%= srcConfig.dist %>/images',
                src: ['sprite/*', 'logos/*']
            },
            //{
            //    expand: true,
            //    cwd: 'bower_components'
            //    //todo: where JS goes
            //},
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist',
                src: 'fonts/*',
                dest: '<%= srcConfig.dist %>'
            }
        ]
    }
};