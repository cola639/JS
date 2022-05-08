// promise
const p = new Promise((resolve) => {
  console.log(4)

  resolve(5)
  // setTimeout(() => {
  //   resolve(5)
  // }, 3 * 1000)
})

function func1() {
  console.log(1)
}

function func2() {
  setTimeout(() => {
    console.log(2)
  }, 0)
  func1()
  console.log(3)
  p.then((value) => {
    console.log(value)
  }).then(() => {
    console.log(6)
  })
}

func2()
