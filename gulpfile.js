const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Adicionando require('sass')
const imagemin = require('gulp-imagemin').default;
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir JavaScript
gulp.task('uglify', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão
gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));

// Tarefa para assistir mudanças nos arquivos e executar as tarefas correspondentes
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/**/*', gulp.series('imagemin'));
    gulp.watch('src/js/**/*.js', gulp.series('uglify'));
});
