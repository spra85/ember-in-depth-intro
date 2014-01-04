module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          'app/assets/css/style.css': 'app/assets/scss/style.scss'
        }
      }
    },

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /app\/assets\/javascripts\/templates\//
        },
        files: {
          'app/assets/javascripts/templates.js': 'app/assets/javascripts/templates/**/*.hbs'
        }
      }
    },

    concat: {
      libs: {
        src: [
          "app/assets/javascripts/lib/jquery-2.0.3.js",
          "app/assets/javascripts/lib/createUsersInLocalStorage.js",
          "app/assets/javascripts/lib/handlebars-1.0.0.js",
          "app/assets/javascripts/lib/ember-1.3.0-beta.4.js",
          "app/assets/javascripts/lib/ember-data-1.0.0.beta.4.js",
          "app/assets/javascripts/lib/ember-localstorage-adapter.js",
          "app/assets/javascripts/lib/moment-2.4.0.js"
        ],
        dest: "app/assets/javascripts/libs.js"
      },
      app: {
        src: [
          "app/assets/javascripts/app-init.js",
          "app/assets/javascripts/router.js",
          "app/assets/javascripts/store.js",
          "app/assets/javascripts/controllers/*.js",
          "app/assets/javascripts/helpers/*.js",
          "app/assets/javascripts/models/*.js",
          "app/assets/javascripts/routes/*.js",
          "app/assets/javascripts/components/*.js",
          "app/assets/javascripts/views/*.js",
          "spec/helpers/fixtures.js"
        ],
        dest: "app/assets/javascripts/app.js"
      },

      jasmine: {
        src: [
          "spec/lib/jasmine.js",
          "spec/lib/jasmine-html.js",
        ],
        dest: "spec/jasmine_min.js"
      },

      spec_helpers: {
        src: [
          "spec/helpers/jasmine_test_adapter.js",
          "spec/helpers/jasmine_fixtures.js",
          "spec/helpers/spec_helper.js",
          "spec/helpers/fixtures.js"
        ],
        dest: "spec/jasmine_helpers_min.js"
      },

      specs: {
        src: "spec/**/*_spec.js",
        dest: "spec/jasmine_specs.js"
      }
    },

    watch: {
      sass: {
        files: "app/assets/scss/**/*.scss",
        tasks: ["sass"]
      },
      emberTemplates: {
        files: 'app/assets/javascripts/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      concat: {
        files: [
          'app/assets/javascripts/**/*.js',
          '!app/assets/javascripts/app.js',
          '!app/assets/javascripts/libs.js',
          '!app/assets/javascripts/templates.js',
          "spec/**/*.js"
        ],
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-templates');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'emberTemplates']);
};