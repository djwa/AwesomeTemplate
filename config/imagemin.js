module.exports = {
    dynamic: {
        options: {
            optimizationLevel: 7,
            cache: false
        },
        files: [
            {
                expand: true,
                cwd: '<%= srcConfig.src %>/images/',
                src: ['**/*.{png,jpg,gif,ico}'],
                dest: '<%= srcConfig.dist %>/images/'
            }
        ]
    }
};