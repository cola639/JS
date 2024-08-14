// throttle 节流
// 定义：当持续触发事件时，保证满足时间间隔才触发事件。
// 场景: 1 图片懒加载 滚动加载 2 防止高频点击 频繁提交表单

/**
 *
 * @param {Function} fn 需要被节流的函数
 * @param {number} delay 延迟的毫秒数，表示fn函数再次执行之前的等待时间
 * @param {boolean} firstTime 是否首次执行，用于决定是否立即执行fn函数，默认为true
 * @returns {Function} 返回一个被节流的函数
 */
function throttle(fn, delay, firstTime = true) {
  let begin = 0
  return function (...args) {
    let now = Date.now()

    if (firstTime) {
      fn.apply(this, args)
      firstTime = false
    } else {
      if (now - begin > delay) fn.apply(this, args)
      begin = now
    }
  }
}
