let mySet = new Set();
let o = { a: 1, b: 2 };

mySet.add(1);
mySet.add(5);
mySet.add("some text");
mySet.add(o);
mySet.add({ a: 1, b: 2 });

//Array.from
const myArr = Array.from(mySet); //[1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

//converting between Set and Array
const mySet1 = new Set([1, 2, 3, 4]);
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log(mySet1.size); // 4
console.log([...mySet1]); // [1, 2, 3, 4]
console.log([...new Set(numbers)]); // [2, 3, 4, 5, 6, 7, 32]

//intersect set
const intersection = new Set([...mySet].filter((x) => mySet1.has(x))); // 1

//difference set
const difference = new Set([...mySet].filter((x) => !mySet1.has(x))); // 5,"some text",{ "a": 1,"b": 2},"value": {"a": 1,"b": 2}
