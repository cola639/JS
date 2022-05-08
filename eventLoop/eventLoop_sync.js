//sync mission
function func1() {
  console.log(1)
}

function func2() {
  console.log(2)
  func1()
  console.log(3)
}

func2()
