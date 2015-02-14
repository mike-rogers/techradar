module.exports = function(grunt) {

    grunt.initConfig({
	jasmine: {
	    pivotal: {
		src: 'src/**/*.js',
		options: {
		    specs: 'spec/*-spec.js',
		    helpers: 'spec/*-helper.js'
		}
	    }
	},
	lodash: {
	    build: {
		dest: 'build/lodash.build.js',
		options: {
		    modifier: 'modern'
		}
	    }
	}
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-lodash');
    grunt.loadNpmTasks('grunt-if-missing');

    grunt.registerTask('build-lodash', ['if-missing:lodash:build:dest']);
    grunt.registerTask('travis', ['build-lodash', 'jasmine']);
    grunt.registerTask('default', ['build-lodash', 'jasmine']);
};
