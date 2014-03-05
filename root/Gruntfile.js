module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  jshint: {
    files: ['src/**/*.js',],
    options: {
      "curly": true,
      "eqnull": true,
      "eqeqeq": true,
      "browser": true,
      globals: {
        jQuery: true,
        console: true,
        module: true
        }
      }
    },
  simplemocha: {
    options: {
      timeout: 3000,
      ignoreLeaks: false,
      reporter: 'tap'
      },
      all: {src: ['test/**/*.js']}
    },
  watch: {
      scripts: {
        files: ['src/**/*.js','**/*.html'],
        tasks: ['jshint','simplemocha'],
      },
      options: {
        livereload: {
          port:3000,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['simplemocha', 'jshint', 'watch']);

};
