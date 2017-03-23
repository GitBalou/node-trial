module.exports = function(grunt) {

    // Chargement de toutes les tâches contenues dans le package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            options: {
                livereload: 35728
            },
            express: {
                files:  [ 'server/**' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false // Without this option specified express won't be reloaded
                }
            }
        },

        express: {
            options: {
            },
            dev: {
                options: {
                    script: 'server/launch.js'
                }
            }
        }
    });

    grunt.registerTask('serve', ['express:dev','watch']);
};



