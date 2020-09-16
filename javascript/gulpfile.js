const {
    series,
    parallel
} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformacaoJs(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // Retirando os comentários
            comments: false,
            // Utilizando o preset mais recente
            presets: ["env"]
        }))
        .pipe(uglify()) //Minificando o código
        .on('error', err => console.log(err0))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build')) // Resutado encaminhado para a pasta build
}

function finaliza(callback) {
    console.log("Finalizou!");
    return callback()
}

exports.default = series(transformacaoJs, finaliza)