// arr = [5, 3, 6, 2, 8, 10];
let arr = [6, 5, 3, 0]

// Bubble Sort
// 1 两次for循环 2 采取中间变量进行位移 3 第二层循环j=0,意味着每次从改变后数组第0位开始

for (i = 0; i < arr.length - 1; i++) {
  //每次从新的第0位开始
  for (j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      //需要调换位置
      exchange = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = exchange
    }
  }
}
console.log(arr)

// Quick Sort
arr = [5, 3, 6, 2, 8, 10]
function quickSort(arr) {
  if (arr.length <= 1) return arr // 当小于 1 个元素开始返回

  const pivotIndex = Math.floor(arr.length / 2)
  const pivotNum = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotNum) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivotNum, ...quickSort(right)]
}
console.log(quickSort(arr))
