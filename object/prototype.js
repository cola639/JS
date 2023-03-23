function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
}

Person.prototype.sayName = function () {
  console.log(this.name)
}

person1 = new Person('john', 18, 'teacher')

person1.sayName()
