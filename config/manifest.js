module.exports = function (grunt, config) {
    return {
        generate: {
            options: {
            //    basePath: '<%= srcConfig.dist %>'
            //    cache: ['<%= srcConfig.dist %>/js/scripts.js', '<%= srcConfig.dist %>/styles/style.min.css'],
            //    network: ['http://*', 'https://*'],
            //    fallback: ['<%= srcConfig.dist %>/offline.html'],
            //    preferOnline: true,
                headcomment: "Awesome manifest"
            //    verbose: true,
            //    timestamp: true,
            //    hash: true,
            //    master: ['<%= srcConfig.src %>/index.html'],
            //    process: function (path) {
            //        return path.substring('<%= srcConfig.dist %>/'.length);
            //    }
            },
            src: [
                '<%= srcConfig.dist %>/*.html',
                '<%= srcConfig.dist %>/js/*.js',
                '<%= srcConfig.dist %>/images/**/*',
                '<%= srcConfig.dist %>/styles/*.css'
            ],
            dest: '<%= srcConfig.dist %>/manifest.appcache'
        }
    }
};
