/**
 Path
 - Node.js 내장 모듈로서 javascript에서 폴더나 파일의 경로를 문자열로 반환하는 모듈
 window 타입 과 POSIX(linux, macOS)타입으로 경로 구분자 가 다른데 이것을 절충시키기 위해 path 모듈사용
 */
const path = require('path')
const log = console.log;
const string = __filename;

log(__filename) // current file path '__' === double under == dunder
log(__dirname)  // current folder path
log(process.cwd()) // 현재 프로세스가 실행되는 위치
log('--------------------------');
log('path.sep:', path.sep); // 경로 구분자 - 윈도는 \, POSIX는 /
log('path.delimiter:', path.delimiter); // 환경 변수의 구분자 - 윈도는 ; POSIX는 :
log('path.dirname():', path.dirname(string)); // 파일의 폴더 경로
log('path.extname():', path.extname(string)); // 피일의 확장자
log('path.basename():', path.basename(string)); // 파일 명(확장자 포함)
log('path.basename - extname:', path.basename(string, path.extname(string))) // 파일 명 - 파일 확장자
log('--------------------------');
log('path.parse():', path.parse(string)); // 파일 경로를 root, dir, base, ext, name의 키를 가지고 있는 객체 리턴
log('path.format():', path.format(path.parse(string))); // path.parse 의 리턴된 dir과 base 값을 합친 경로 값 - dir/base
log('--------------------------');
log('path.isAbsolute:', path.isAbsolute('/')); // 해당 경로가 절대경로인지 판별
log('path.isAbsolute:', path.isAbsolute('./'));
log('--------------------------');
/**
 *  path.join : 인자로 받은 경로를 하나로 합쳐 문자열 형태로 path를 리턴
 *  path.resolve:
 *  join 메소드와 같은 일을 하지만 경로 인자를 오른쪽에서 부터 왼쪽으로 합쳐 나간다.
 *  합치는중 절대 경로 인자(/)를 만나게 되면 다음 왼쪽 인자들을 무시하고 합쳐진 경로를 반환 한다.
 * */
log(path.join(__dirname, 'path.js'))
log(path.resolve(__dirname, 'path.js'))
log(path.join('/a', '/b', 'c')) // /a/b/c
log(path.resolve('/a', '/b', 'c')) // /b/c
