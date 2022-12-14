// throttle 节流
// 定义：当持续触发事件时，保证满足时间间隔才触发事件。
// 场景: 1 图片懒加载 滚动加载 2 防止高频点击 频繁提交表单

function throttle(fn, delay, firstTime = true) {
  let begin = 0
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
