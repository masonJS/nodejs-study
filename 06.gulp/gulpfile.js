const { series, parallel, src, dest } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const eslint = require('gulp-eslint')

function eslintCode() {
  return src(['./*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

function minifyCode() {
  return src('./*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(dest('./dist'))
}


function second() {

}

function third() {

}

exports.default = series(eslintCode, minifyCode)
