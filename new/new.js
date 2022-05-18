//1.new的作用
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job

  return 1111
}

let person1 = new Person('john', '18', 'techer')

//2.实现一个new
function myNew(fn, ...arguments) {
  let obj = {}

  obj.__proto__ = fn.prototype

  //处理不同返回值的影响(原始值,对象)
  let newResult = fn.apply(obj, arguments)

  return newResult instanceof Object ? newResult : obj
}

let person2 = myNew(Person, 'john', 18, 'teacher')
console.log(person2.name, person2.age, person2.job)
