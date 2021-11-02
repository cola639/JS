//factory
function createPerson(name, age, job) {
  let o = {};
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

let person1 = createPerson("john", 18, "teacher");

//constructor
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  this.sayName = function () {
    console.log(this.name);
  };
}

person2 = new Person("john", 18, "teacher");

person2.sayName();
