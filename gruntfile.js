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
        options: {
            atBegin: true
        },
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
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-karma');
    
  grunt.registerTask('default', ['jshint', 'ngtemplates', 'concat', 'karma:unit:run']);
  grunt.registerTask('watchk', ['karma:unit:start', 'watch']);
};