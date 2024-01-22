// protoType this
// 原型链this 指向生成的对象本身
function protoTypeFunc(name) {
  this.name = name
  this.sayName = function () {
    console.log('this name :', this.name)
  }
}

protoTypeFunc.prototype.getName = function () {
  console.log('this name :', this.name)
}

let fun1 = new protoTypeFunc('John')
fun1.sayName()
fun1.getName()
