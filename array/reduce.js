/**
 * arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 */

/**
 *
 * Count the number of occurrences of an element
 *
 */
const array = [1, 1, 2, 2, 3];

const elementArr = array.reduce(function countElement(accumulatorArr, currentValue) {
  if (currentValue in accumulatorArr) {
    accumulatorArr[currentValue]++;
  } else {
    accumulatorArr[currentValue] = 1;
  }

  return accumulatorArr;
}, {});

console.log(elementArr);
