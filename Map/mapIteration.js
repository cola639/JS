//create Map
let myMap = new Map();

//declare value
let keyObj = {};
let keyFunc = function () {};
let keySring = "a string";

//set key
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");
myMap.set(keySring, "和键keySring关联的值");

// 1 for...of...
for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// [object Object] = 和键keyObj关联的值
// function () {} = 和键keyFunc关联的值
// a string = 和键keySring关联的值

// 2 myMap.entries()
for (let [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// [object Object] = 和键keyObj关联的值
// function () {} = 和键keyFunc关联的值
// a string = 和键keySring关联的值

// 3 key
for (let key of myMap.keys()) {
  console.log(key);
}
// [object Object]
// function () {}
// a string

// 4 value
for (let value of myMap.values()) {
  console.log(value);
}
// 和键keyObj关联的值
// 和键keyFunc关联的值
// 和键keySring关联的值

// 5 forEach
myMap.forEach(function (key, value) {
  console.log(`${key} = ${value}`);
});
// [object Object] = 和键keyObj关联的值
// function () {} = 和键keyFunc关联的值
// a string = 和键keySring关联的值
