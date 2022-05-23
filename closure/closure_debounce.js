// debounce 防抖
// 触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
// 场景: 1 防止搜索框频繁请求 2 手机号,邮箱频繁验证 3 窗口大小resize
function debounce(fn, delay, immediate) {
  let t
  return function (...arguments) {
    t && clearTimeout(t)
    if (immediate && !t) {
      fn.call(this, arguments)
    }
    t = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
