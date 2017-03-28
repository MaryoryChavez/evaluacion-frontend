var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	// tarea script
});

gulp.task('style', function() {
    return gulp.src('./dist/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'));
	// tarea style
});

gulp.task('boostrap',function(){
   gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./src/css')); 
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./src/js'));
});

gulp.task('fonts',function(){
   gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
   .pipe(gulp.dest('./src/css'));
});

gulp.task('jq',function(){
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./src/js'));
});

gulp.task('images', function() {
    gulp.src('./docs/*.jpg')
    .pipe(gulp.dest('./src/img'));
	// tarea images
});

gulp.task('alert',function(){
    gulp.src('./node_modules/sweetalert/dist/sweetalert.min.js')
    .pipe(gulp.dest('./src/js'));
    
    gulp.src('./node_modules/sweetalert/dist/sweetalert.css')
    .pipe(gulp.dest('./src/css')); 
})


gulp.task('default', ['images', 'style','boostrap', 'script','fonts','jq','alert']);