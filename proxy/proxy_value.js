function callback() {
  console.log('obj.signal', obj.signal)
}
var obj = new Proxy(
  { signal: false },
  {
    set: function (target, propKey, value, receiver) {
      Reflect.set(target, propKey, value, receiver)
      if (propKey === 'signal' && value) {
        callback()
      }
    }
  }
)
setTimeout(() => (obj.signal = true), 3 * 1000)
