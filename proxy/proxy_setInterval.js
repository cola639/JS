const obj = { signal: false }
let count = 0
function callback() {
  console.log('obj.signal', obj.signal)
}

const timer = setInterval(() => {
  count++
  console.log(count)
  if (obj.signal === true) {
    clearInterval(timer)
    callback()
  }
}, 1 * 1000)

setTimeout(() => (obj.signal = true), 3 * 1000)
