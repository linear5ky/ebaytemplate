// Use "grunt --help" to list the available tasks

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            // this is the "dev" Sass config used with "grunt watch" command
            dev: {
                options: {
                    style: 'expanded',
                },
                files: {
                    // the first path is the output and the second is the input
                            'css/main.css': 'scss/custom.scss'
                }
            },
            // this is the "production" Sass config used with the "grunt default" command
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                         'css/main.css': 'scss/custom.scss'
                }
            }
        },
        // configure the "grunt watch" task
        watch: {
            sass: {
                files: ['scss/**/*.scss',],
                tasks: ['sass:dev']

          
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // "grunt" is the same as running "grunt sass:dist".
    grunt.registerTask('default', ['sass:dist']);
    grunt.registerTask('dev', ['sass:dev']);
};
