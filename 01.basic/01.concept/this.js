// 전역 스코프의 this만 빈 객체
console.log(this)
// {}
console.log(this === module.exports)
// true
function a () {
  console.log(this)
  // global
}

a();


// this 객체는 javascript에서의 방식과 동일하면서 전역 스코프에 선언될때만 global이 아닌 빈객체가 나온다는 것을 확인
