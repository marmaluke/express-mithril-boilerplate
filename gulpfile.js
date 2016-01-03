var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('build', function() {
    return browserify('./client/js/app.js', {debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./server/static/js'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('./client/js/**/*.js', ['build']);
});

gulp.task('serve', function() {
    var server = gls.new('server/app.js');
    server.start();

    gulp.watch(['server/static/**/*'], function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch(['server/**/*', '!server/static/**/*'], function(file) {
        console.log('restarting server');
        server.start.bind(server)();
    });

});

gulp.task('default', ['serve', 'watch']);
