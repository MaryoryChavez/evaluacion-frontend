var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var minify = require('gulp-minify');



gulp.task('script', function(cb){
    gulp.src('./src/js/ciudades.js')
    .pipe(gulp.dest('./dist/js'));
	// tarea script
});

 
gulp.task('compress', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        exclude: ['ciudades.js'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('style', function() {
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
	// tarea style
});

gulp.task('boostrap',function(){
   gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./dist/css')); 
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('fonts',function(){
   gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
   .pipe(gulp.dest('./dist/css'));
    gulp.src('./node_modules/font-awesome/fonts/*.*')
   .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('jq',function(){
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function() {
    gulp.src('./docs/*.jpg')
    .pipe(gulp.dest('./dist/img'));
	// tarea images
});

gulp.task('alert',function(){
    gulp.src('./node_modules/sweetalert/dist/sweetalert.min.js')
    .pipe(gulp.dest('./dist/js'));
    
    gulp.src('./node_modules/sweetalert/dist/sweetalert.css')
    .pipe(gulp.dest('./dist/css')); 
})


gulp.task('default', ['images', 'style','boostrap', 'script','fonts','jq','alert','compress']);