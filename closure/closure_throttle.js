// throttle 节流
// 定义：当持续触发事件时，保证隔间时间触发一次事件。
// 场景: 1图片懒加载 滚动加载 2防止高频点击 频繁提交表单

function throttle(fn, delay) {
  let begin = 0
  let firstTime = true
  return function (...arguments) {
    let now = Date.now()

    if (firstTime) {
      fn.apply(this, arguments)
      firstTime = false
    } else {
      if (now - begin > delay) fn.apply(this, arguments)
      begin = now
    }
  }
}
