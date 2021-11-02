//every return true false
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 0);
console.log(everyResult);

//filter delete operation
filterResult = numbers.filter((item, index, array) => item !== 3);
console.log(filterResult);

//map return a new array map render
mapNewArray = numbers.map((item, index, array) => item * 2);
console.log(mapNewArray);

//some if one item satisfies return true
someArray = numbers.some((item, index, array) => item === 2);
console.log(someArray);
