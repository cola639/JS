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
function quickSort(arr) {
  if (arr.length <= 1) return arr // 当数组只剩一个或空时，返回

  // 选取中间元素作为 pivot
  const mid = Math.floor(arr.length / 2)
  const pivot = arr[mid]

  // 分成两个区块
  let left = []
  let right = []

  // 将小于 pivot 的放在 left，大于 pivot 的放在 right
  for (let i = 0; i < arr.length; i++) {
    if (i === mid) continue // 跳过 pivot 元素
    if (arr[i] < pivot) {
      left.push(arr[i]) // 小于 pivot 的放入左边
    } else {
      right.push(arr[i]) // 大于 pivot 的放入右边
    }
  }

  // 递归排序左边和右边，合并结果
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr1 = [5, 3, 6, 2, 8, 10]
console.log(quickSort(arr1))
