var syntax  = 'sass'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync'),
		spritesmith 	= require('gulp.spritesmith');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('js', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/mmenu/js/jquery.mmenu.all.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('sprite', function () { 
	var spriteSocialData = gulp.src('app/img/icon_social/*.png').pipe(spritesmith({ 
	imgName: 'sprite-social.png', 
	cssName: 'sprite-social.sass', 
	cssFormat: 'sass', 
	padding: 20, 
	algorithm: 'top-down', 
	cssVarMap: function(sprite) { 
	sprite.name = 'i-' + sprite.name; 
		}, 
	imgPath: '../sprites/sprite-social.png' 
		})); 
	var spriteFeaturesData = gulp.src('app/img/icon_features/*.png').pipe(spritesmith({ 
		imgName: 'sprite-features.png', 
		cssName: 'sprite-features.sass', 
		cssFormat: 'sass', 
		padding: 20, 
		algorithm: 'top-down', 
		cssVarMap: function(sprite) { 
		sprite.name = 'i-' + sprite.name; 
			}, 
		imgPath: '../sprites/sprite-features.png' 
			})); 
	return spriteSocialData.pipe(gulp.dest('app/sprites/')), 
			spriteFeaturesData.pipe(gulp.dest('app/sprites/'));
});

gulp.task('watch', ['styles', 'js', 'browser-sync','sprite'], function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);
