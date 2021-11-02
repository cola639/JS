//reverse
const arr = [5, 4, 3, 2, 1];
console.log(arr.reverse());

//sort
const arr1 = [0, 1, 5, 10, 15];

function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(arr1.sort()); //ASII code
console.log(arr1.sort(compare));
