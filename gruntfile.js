module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css/less"]
                },
                files: {
                    'css/style.css': 'css/less/styles.less'
                }
            }
        },
        connect: {
            sever: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: '',
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['*.html',
                        'js/script.js', 'css/less/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['less', 'connect', 'watch']);
};