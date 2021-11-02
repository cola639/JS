//1 indexOf lastIndexOf if not exist return -1
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(3));
console.log(numbers.indexOf(6));
console.log(numbers.lastIndexOf(3));

//2 includes return true/false
console.log(numbers.includes(3), numbers.includes(6));

//3 find findInex return element index
const person = [
  { id: 1, name: "john" },
  { id: 2, name: "lucy" },
];
console.log(person.find((item, index, array) => item.name === "john"));
console.log(person.findIndex((item, index, array) => item.name === "john"));
