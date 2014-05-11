module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
		    dist: {
		        src: [
		        	'app/ngmin/*.js',
		            'app/ngmin/*/*.js'
		        ],
		        dest: 'out/production.js',
		    }
		},

		clean: ['app/out', 'app/css/*.css', 'out'],

		uglify: {
		    build: {
		        src: 'out/production.js',
		        dest: 'out/production.min.js'
		    }
		},

		watch: {
		  scripts: {
		    files: ['app/js/*.js', 'app/js/*/*.js', 'app/scss/*.scss', 'app/partials/**/*.html', 'app/*.html'],
		    tasks: ['dev'],
		    options: {
		      spawn: false,
		    },
		  },
		},

		sass: {
			dist: {
			    options: {
			        style: 'compressed'
			    },
			    files: {
			        'out/css/main.css': 'app/scss/main.scss'
			    }
			} 
		},

		ngmin: {
			others: {
				src: ['app/js/*.js'],
				dest: 'app/ngmin/others.js'
			},
			services: {
				src: ['app/js/services/*.js'],
				dest: 'app/ngmin/services/services.js'
			},
			controllers: {
				src: ['app/js/controllers/*.js'],
				dest: 'app/ngmin/controllers/controllers.js'
			},
			directives: {
				src: ['app/js/directives/*.js'],
				dest: 'app/ngmin/directives/directives.js'
			},
			filters: {
				src: ['app/js/filters/*.js'],
				dest: 'app/ngmin/filters/filters.js'
			}
		},

		copy: {
		  main: {
		    files: [
		      // includes files within path and its sub-directories
		      {expand: false, src: ['app/index.html'], dest: 'out/index.html'},
		      {expand: true, flatten: true, src: ['app/assets/*'], dest: 'out/assets/'},
		      {expand: true, flatten: true, src: ['app/partials/*'], dest: 'out/partials/'},
		      {expand: true, flatten: true, src: ['app/img/*'], dest: 'out/img/'},
		    ]
		  },
		  dev: {
		  	files: [
		      // includes files within path and its sub-directories
		      {expand: false, src: ['app/index-dev.html'], dest: 'out/index.html'},
		      {expand: true, flatten: true, src: ['app/assets/*'], dest: 'out/assets/'},
		      {expand: true, cwd: 'app/partials/', src: ['**'], dest: 'out/partials/'},
		      {expand: true, cwd: 'app/lib/', src: ['**'], dest: 'out/lib/'},
		      {expand: true, flatten: true, src: ['app/img/*'], dest: 'out/img/'},
		      {expand: true, flatten: true, src: ['app/js/controllers/*'], dest: 'out/controllers/'},
		      {expand: true, flatten: true, src: ['app/js/services/*'], dest: 'out/services/'},
		      {expand: true, flatten: true, src: ['app/js/directives/*'], dest: 'out/directives/'},
		      {expand: true, flatten: true, src: ['app/js/app.js'], dest: 'out'}
		    ]
		  },
		  deploy: {
		  	files: [
		      // includes files within path and its sub-directories
		      {expand: false, src: ['app/index.html'], dest: 'out/index.html'},
		      {expand: true, flatten: true, src: ['app/assets/*'], dest: 'out/assets/'},
		      {expand: true, flatten: true, src: ['app/partials/*'], dest: 'out/partials/'},
		      {expand: true, flatten: true, src: ['app/img/*'], dest: 'out/img/'},
		    ]
		  }
		},

		removelogging: {
		    dist: {
		      src: ["app/ngmin/**/*.js"]
		    }
		  }
    });

    // Clean
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Ng Min
    grunt.loadNpmTasks('grunt-ngmin');

    // SASS
    grunt.loadNpmTasks('grunt-contrib-sass');

	// Uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Concat
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Copy
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Remove Logging
    grunt.loadNpmTasks("grunt-remove-logging");

    // Register tasks to run...
    grunt.registerTask('default', ['clean', 'sass', 'ngmin', 'concat', 'uglify', 'copy:main', 'watch']);

    grunt.registerTask('dev', ['clean', 'sass', 'copy:dev', 'watch']);

    grunt.registerTask('deploy', ['clean', 'sass', 'ngmin', 'removelogging', 'concat', 'uglify', 'copy:deploy']);

};