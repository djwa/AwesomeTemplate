module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= srcConfig.dist %>/{,*/}*',
                '!<%= srcConfig.dist %>/.git{,*/}*'
            ]
        }]
    },
    server: '.tmp'
};
