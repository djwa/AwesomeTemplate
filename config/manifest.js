module.exports = function (grunt, config) {
    return {
        generate: {
            options: {
                basePath: '<%= srcConfig.dist %>',
            //    cache: ['<%= srcConfig.dist %>/js/scripts.js', '<%= srcConfig.dist %>/styles/style.min.css'],
                network: ['http://*', 'https://*'],
                fallback: ['views/offline.html'],
                preferOnline: true,
                headcomment: "Awesome manifest",
                verbose: true,
                timestamp: true,
                //    master: ['<%= srcConfig.src %>/index.html'],
                hash: true
            },
            src: [
                '*.html',
                'js/*.js',
                'images/**/*.png',
                'images/**/*.jpg',
                'styles/*.css'
            ],
            dest: '<%= srcConfig.dist %>/manifest.appcache'
        }
    }
};
