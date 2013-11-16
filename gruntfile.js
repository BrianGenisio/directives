module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: { separator: ';\n\n' },
        dist: {
            src: ['js/module.js', 'js/**/*.js'],
            dest: 'dist/app.js'
        },
        tests: {
            src: ['tests/**/*.js'],
            dest: 'dist/tests.js'
        }
    },
    jshint: {
        all: ['js/*.js']
    },
    watch: {
        scripts: {
            files: ['js/**/*.js', 'tests/**/*.js'],
            tasks: ['jshint', 'concat'],
            options: {
                livereload: true
            }
        },
        html: {
            files: '*.html',
            tasks: [],
            options: {
                livereload: true
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-livereload');
    
  grunt.registerTask('default', ['jshint', 'concat']);

};