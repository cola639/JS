const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async opration 1')
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('async operation 2')

    resolve(2)
  }, 5000)
})

// Promise.all([p1, p2])
Promise.race([p1, p2])
