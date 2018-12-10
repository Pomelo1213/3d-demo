const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
const sass = require('gulp-sass')
// import gulp from 'gulp'
// import babel from 'gulp-babel'

gulp.task('js', function(){
  gulp.src('./three/js/index.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./src/js'))
})

gulp.task('css', function(){
  gulp.src('./three/sass/index.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/css'))
})

gulp.task('build', ['js', 'css'])

gulp.task('clear', function () {
  del('./src')
})
