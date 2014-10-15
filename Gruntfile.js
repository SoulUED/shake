/**
 * Created by qinghui on 14/8/21.
 */
"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            files: ["build/*.*","build/**/*.*","build/**"]
        },
        copy: {
            js: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.js"],
                    dest: "build/",
                    ext: ".debug.js"
                }]
            }
        },
        compass: {
            main: {
                options: {
                    sassDir: "assets/",
                    cssDir: "build/",
                    environment: "development"
                },
                files: [{
                    expand: true,
                    cwd: "assets/",
                    src: ["**/*.scss"],
                    dest: "build/",
                    ext: ".debug.css"
                }]
            }
        },
        cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: "build/",
                    src: ["**/*.css"],
                    dest: "build/",
                    ext: ".css"
                }]
            }
        },
        coffee: {
            main: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.coffee"],
                    dest: "build/",
                    ext: ".js"
                }]
            }
        },
        uglify: {
            main: {
                files: [{
                    expand: true,
                    cwd: "build/",
                    src: ["**/*.js"],
                    dest: "build/",
                    ext: ".js"
                }]
            }
        },
        watch: {
            js: {
                files: ["src/*.coffee","src/*.js", "src/**/*.js"],
                tasks: ["js"]
            },
            css: {
                files: ["assets/*.scss", "assets/**/*.scss"],
                tasks: ["css"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('default', ["clean","copy","compass","cssmin","uglify"]);
    grunt.registerTask("css", ["compass","cssmin"]);
    grunt.registerTask("js", ["coffee", "uglify"]);

};
