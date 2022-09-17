// import Queue from './queue'
const Queue = require('./queue')

class Wx extends Queue {
  config(info) {
    console.log(info)
    setTimeout(() => {
      console.log('config sucess')
      this.callQueue()
    }, 2 * 1000)
  }

  ready(readyArr) {
    readyArr.forEach((item) => {
      this.enqueue(item)
    })
  }
}

const fn1 = () => console.log('call fn1')
const fn2 = () => console.log('call fn2')
const fn3 = () => console.log('call fn3')
const readyArr = [fn1, fn2, fn3]

const wx = new Wx()
wx.config('config params')
wx.ready(readyArr)
