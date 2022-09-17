let p1 = new Promise((resolve, reject) => {
  console.log('p1 executor')
  setTimeout(resolve, 1000)
})

p1.then(function () {
  new Promise((resolve, reject) => {
    console.log('p2 executor')
    setTimeout(resolve, 1000)
  })
})
  .then(function () {
    new Promise((resolve, reject) => {
      console.log('p3 executor')
      setTimeout(resolve, 1000)
    })
  })
  .then(function () {
    new Promise((resolve, reject) => {
      console.log('p4 executor')
      setTimeout(resolve, 1000)
    })
  })
