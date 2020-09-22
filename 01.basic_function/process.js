/**
process.env
*/

// 비밀키를 보관하는 용도로
const secretId = process.env.SECRET_ID

/**
 process.nextTick
 */
// micro task queue 에 저장
// 일반적인 비동기 이벤트보다 높은 우선순위
process.nextTick(() => {
  console.log('micro task queu')
})

/**
 process.exit(코드)
 */

// 코드가 없거나 0이면 정상 종료
// 코드가 있을경우 에러 종료
