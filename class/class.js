class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get user() {
    return this.getUser();
  }

  getUser() {
    return {
      name: this.name,
      age: this.age,
      job: this.job,
    };
  }
}

const person = new Person("John", "18", "teacher");
console.log(person.user);
