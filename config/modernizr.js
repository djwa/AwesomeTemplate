module.exports = function (grunt, config) {
    return {
        dist: {
            "devFile": "<%= srcConfig.src %>/js/modernizr.dev.js",
            "outputFile": "<%= srcConfig.dist %>/js/modernizr-custom.js",
            "extra": {
                "shiv": true,
                "printshiv": false,
                "load": true,
                "mq": false,
                "cssclasses": true
            },
            "extensibility": {
                "addtest": false,
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
            "tests": [],
            "parseFiles": true,
            "matchCommunityTests": false,
            "customTests": []
        }
    }
};