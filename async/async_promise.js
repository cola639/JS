// async_promise
function promise() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('得到用户Id为1')
    }, 1000)
  })
    .then(
      (value) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(value)
            resolve({ name: 'cola639', date: '2021-07' })
          }, 1000)
        })
    )
    .then((value) => {
      console.log(`用户数据为${value.name}注册时间为${value.date}`)
    })
    .catch(() => {
      console.log('失败')
    })
    .finally(() => {
      console.log('结束')
    })
}
promise()

// 2
console.log(1)
new Promise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    resolve(2)
  }, 1000)
}).then((value) => {
  console.log(value + 2)
})
