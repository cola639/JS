// 2D array converted to Map
let mapArray = [
  ["key", "value1"],
  ["key2", "value2"],
];

let myMap = new Map(mapArray);
myMap.get("key1"); // 'value1'

// Map converted to array
const newArray = Array.from(myMap);
console.log(newArray); // ["key", "value1"], ["key2", "value2"]

[...myMap]; // equal to Array.from(myMap)
