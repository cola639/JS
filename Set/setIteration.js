//set declare
let mySet = new Set();
const o = { a: 1, b: 2 };

mySet.add(1);
mySet.add(5);
mySet.add("some text");
mySet.add(o);
mySet.add({ a: 1, b: 2 });

//for...of...
for (let item of mySet) {
  console.log(item);
}

//mySet.entries()
for (let [key, value] of mySet.entries()) console.log(key, value);

//mySet.keys()
for (let item of mySet.keys()) console.log(item);

//mySet.values()
for (let item of mySet.values()) console.log(item);
