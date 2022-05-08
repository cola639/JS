let p = new Promise((resolve, reject) => {
  console.log('first')
  resolve()
})

p.then(() => console.log('second'))
  .then(() => console.log('third'))
  .then(() => console.log('fourth'))

setTimeout(() => {
  console.log('sixth')
}, 0)
