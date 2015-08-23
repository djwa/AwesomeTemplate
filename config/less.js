module.exports = function(grunt, srcConfig) {
    return {
        development: {
            options: {
                modifyVars: {
                    NO_CACHE: '"' + '1440355116893' + '"'
                },
                report: 'min',
                strictMath: false,
                cleancss: true,
                compress: true,
                paths: ['<%= srcConfig.server %>/styles/',
                    '<%= srcConfig.src %>/styles/'
                ]
            },
            files: {
                '<%= srcConfig.dist %>/styles/styles.min.css': '<%= srcConfig.src %>/styles/main.less'
            }
        }
    }
};