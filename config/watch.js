module.exports = {
    bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
    },
    src: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= srcConfig.src %>/styles/**/*.less',
            '<%= srcConfig.src %>/scripts/*.js',
            '<%= srcConfig.src %>/views/**/*.html',
            '<%= srcConfig.src %>/index.html'
        ],
        tasks: ['build']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: ['<%= srcConfig.src %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= srcConfig.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: [
            'processhtml'
        ]
    }
};
