const timeout = setTimeout(() => {
  console.log('run in 1.5 second')
}, 1500)

const interval = setInterval(() => {
  console.log('run every 1')
}, 1000)

const timeout2 = setTimeout(() => {
  console.log('do not run')
}, 300)

setTimeout(() => {
  clearTimeout(timeout2)
  clearInterval(interval)
}, 2500)

const immediate = setImmediate(() => {
  console.log('immediate run')
})

const immediate2 = setImmediate(() => {
  console.log('do not immediate run')
})

clearImmediate(immediate2)


/** log */
// immediate run
// do not run
// run every 1
// run in 1.5 second
// run every 1
