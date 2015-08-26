module.exports = function (grunt, config) {
    return {
        dist: {
            "devFile": "<%= srcConfig.src %>/js/modernizr.dev.js",
            "outputFile": "<%= srcConfig.dist %>/js/modernizr.js",
            "extra": {
                "shiv": true,
                "printshiv": false,
                "load": true,
                "mq": false,
                "cssclasses": true
            },
            "extensibility": {
                "addtest": true,
                "prefixed": false,
                "teststyles": false,
                "testprops": false,
                "testallprops": false,
                "hasevents": false,
                "prefixes": false,
                "domprefixes": false,
                "cssclassprefix": ""
            },
            "uglify": true,
            "tests": [
                'csstransforms3d',
                'flexbox'
            ],
            "parseFiles": false,
            "matchCommunityTests": true,
            "customTests": []
        }
    }
};