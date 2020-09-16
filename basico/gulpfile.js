const gulp = require('gulp')
const {
    series,
    parallel
} = require('gulp')

const antes = cb => {
    console.log('Tarefa um');
    return cb()
}

function copy(callback) {
    // Todos arquivos .txt serão destinados para a (pastaB)
    gulp.src('pastaA/**/*.txt')
        // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // .pipe(HalfImage())
        // .pipe(BlackNWhiteImage())
        // .pipe(TransformacoesPipeLine())
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = cb => {
    console.log('Tarefa Fim');
    return cb()
}

module.exports.default = series(
    parallel(antes, copy), fim
)