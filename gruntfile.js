module.exports = function(grunt) {
    grunt.initConfig({
        sass: { // will be used only during development
            dist: {
                files: {
                    // destination // source file
                    'css/style.css' : 'scss/style.scss'
                }
            }
        },

        cssmin: {
            build: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },

        uglify: {
            build: {
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        },

        watch: {
            sass: {
                files: '**/*.scss',
                tasks: ['css'],
                options: {
                    livereload: 35729
                }
            },

            uglify: {
                files: 'js/app.js',
                tasks: ['uglify']
            },

            all: {
                files: ['**/*.html'],
                options: {
                    livereload: true
                }
            }
        }
    })

    // Default task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('js', ['uglify']);

    // Load up tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
}