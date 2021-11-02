//flatten

// 1 concat进行数组加入 2 判断是否为数组 递归进行遍历
const array1 = [[1, [2, 3]], 4, 5];

function flatten(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator.concat(
      Array.isArray(currentValue) ? flatten(currentValue) : currentValue
    );
  }, []);
}

console.log(flatten(array1));
