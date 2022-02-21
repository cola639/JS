//create Map
let mySet = new Set();

//add method
mySet.add(1);
mySet.add(2);
mySet.add("some text");

let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

//has method
mySet.has(1); //true
mySet.has(3); //false

//delete method
mySet1.delete(1);
mySet.has(1); //false
