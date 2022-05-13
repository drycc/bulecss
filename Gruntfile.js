module.exports = function(grunt) {
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     clean: {
        build    : ['build/'],
     },
     copy: {
        fonts: {
            src    : 'src/fonts/*',
            dest   : 'build/fonts',
            expand : true,
            flatten: true
        },
        images: {
            src    : 'src/images/*',
            dest   : 'build/images',
            expand : true,
            flatten: true
        },
     },
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['clean:build', 'cssmin', 'copy:fonts', 'copy:images']);
}

