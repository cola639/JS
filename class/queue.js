class Queue {
  items = []

  constructor() {
    // console.log('constructor ')
    // items.set(this, [])
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    let r = qitems.shift()
    return r
  }
  callQueue() {
    console.log(this.items)
    this.items.forEach((eachFn) => eachFn())
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
}

module.exports = Queue
// export default Queue
// var stack = []
// function fn1() {
//   console.log('第一个调用')
// }
// function fn2() {
//   console.log('第二个调用')
// }
// // function fn3() {
// //   console.log('第三个调用')
// // }
// stack.push(fn1, fn2, fn3)

// stack.forEach((eachFn) => eachFn())
