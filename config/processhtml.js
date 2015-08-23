module.exports = {
    compile: {
        files: {
            '<%= srcConfig.dist %>/index.html': ['<%= srcConfig.src %>/index.html']
        },
        data: {
            something: true
        }
    }
};
