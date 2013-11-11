module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: { separator: ';' },
        dist: {
            src: ['js/**/*.js'],
            dest: 'dist/app.js'
        }
    },
    jshint: {
        all: ['js/*.js']
    },
    watch: {
        scripts: {
            files: '**/*.js',
            tasks: ['jshint', 'concat'],
            options: {
                livereload: false
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