// normal function
function windowThis() {
  console.log(this)
}

windowThis()

// object
const object = {
  objectThis() {
    console.log(this)
  }
}

object.objectThis()

// new Function
function newFunc(name) {
  this.name = name
  this.sayName = function () {
    console.log(this.name)
  }
}

let fun1 = new newFunc('John')
fun1.sayName()
