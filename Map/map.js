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

myMap.size; // 3

//get key
myMap.get(keyObj); // "和键keyObj关联的值"
myMap.get(keyFunc); // "和键keyFunc关联的值"
myMap.get(keyString); // "和键'a string'关联的值"

myMap.get({}); // undefined, 因为keyObj !== {}
myMap.get(function () {}); // undefined, 因为keyFunc !== function () {}
myMap.get("a string"); // "和键'a string'关联的值", 因为keyString === 'a string'
