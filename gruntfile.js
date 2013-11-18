module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: { separator: ';\n\n' },
        dist: {
            src: ['app/module.js', 'app/**/*.js', 'dist/templates.js'],
            dest: 'dist/app.js'
        },
        tests: {
            src: ['tests/**/*.js'],
            dest: 'dist/tests.js'
        }
    },
    jshint: {
        all: ['app/*.js']
    },
    ngtemplates: {
        templates: {
            cwd: 'app',
            src: '**/*.html',
            dest: 'dist/templates.js'
        }
    },
    watch: {
        scripts: {
            files: ['app/**/*.js', 'app/**/*.html', 'tests/**/*.js'],
            tasks: ['default'],
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
        },
        css: {
            files: 'app/**/*.css',
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
  grunt.loadNpmTasks('grunt-angular-templates');
    
  grunt.registerTask('default', ['jshint', 'ngtemplates', 'concat']);

};