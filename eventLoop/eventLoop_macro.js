//macro-task setTimeout、setInterval、setImmediate
function func1() {
  console.log(1)
  setTimeout(() => {
    console.log(4)
  }, 10)
}

function func2() {
  setTimeout(() => {
    console.log(2)
  }, 0)
  func1()
  console.log(3)
}

func2()
