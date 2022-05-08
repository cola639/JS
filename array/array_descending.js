const arr = [5, 3, 6, 2, 8, 10]

// 1 两次for循环 2 采取中间变量进行位移 3 第二层循环j=0,意味着每次从改变后数组第0位开始

for (i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1] > arr[j]) {
      change = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = change
    }
  }
}

console.log(arr)
