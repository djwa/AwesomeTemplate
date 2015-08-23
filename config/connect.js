module.exports = function (grunt, config) {
    return {
        options: {
            port: 8000,
            hostname: '0.0.0.0',
            livereload: 35723
        },
        livereload: {
            options: {
                open: false,
                middleware: function (connect) {
                    return [
                        //connect.static('.tmp'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        //connect().use(
                        //    '/vendor',
                        //    connect.static(config.srcConfig.dist + '/vendor')
                        //    //todo: todo figure this out
                        //),
                        connect().use(
                            '/.tmp',
                            connect.static('.tmp')
                        ),
                        connect.static(config.srcConfig.server)
                        //connect.static(config.srcConfig.src)
                    ];
                }
            }
        },
        dist: {
            options: {
                open: false,
                port: 8000,
                livereload: true,
                base: '<%= srcConfig.dist %>/'
            }
        }
    }
};