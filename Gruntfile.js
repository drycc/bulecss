module.exports = function(grunt) {
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'build/bulecss.css': [
                     "src/bulecss.css",
                     "src/home.css",
                     "src/dashboard.css"
                 ]
             }
         }
     }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
}

