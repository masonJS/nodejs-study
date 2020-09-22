console.log(__filename) // current file path '__' === double under == dunder
console.log(__dirname)  // current folder path
console.log(process.cwd()) // 현재 프로세스가 실행되는 위치


/**
 Path
 - Node.js 내장 모듈로서 javascript에서 폴더나 파일의 경로를 문자열로 반환하는 모듈
 window 타입 과 POSIX(linux, macOS)타입으로 경로 구분자 가 다른데 이것을 절충시키기 위해 path 모듈사용

 path.join : 인자로 받은 경로를 하나로 합쳐 문자열 형태로 path를 리턴
 path.resolve:
 join 메소드와 같은 일을 하지만 경로 인자를 오른쪽에서 부터 왼쪽으로 합쳐 나간다.
 합치는중 절대 경로 인자(/)를 만나게 되면 다음 왼쪽 인자들을 무시하고 합쳐진 경로를 반환 한다.
 */
const path = require('path')

path.join(__dirname, 'path.js')
path.resolve(__dirname, 'path.js')
