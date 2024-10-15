/**
 * new this 指向构造函数调用时的对象
 */
function Person(name) {
  this.name = name // this 指向新创建的对象
}

const person = new Person('Alice') // 构造函数调用，this 指向新创建的 person 对象
console.log(person.name) // 输出 'Alice'
