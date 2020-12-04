

// 중첩 객체로 둘러싸인 안에 요소를 로그로 확인하고 싶을때 depth가 3이상일 경우 console.dir(data, { depth }) 형식을 사용한다.
const array = [[[{ a: 1, b: 2 }]]]
console.log(array)
console.dir(array, { depth: 3 })

// 배열 요소에 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현
const obj = { a: 1, b: 2 }
console.table(obj)
