// const  arr = [5, 3, 6, 2, 8, 10];
const arr = [6, 5, 3, 0]

//1 两次for循环 2 采取中间变量进行位移 3 第二层循环j=0,意味着每次从改变后数组第0位开始

for (i = 0; i < arr.length - 1; i++) {
  //每次从新的第0位开始
  for (j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      //调换位置
      console.log('进来时', arr)
      change = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = change
      console.log('操作后', arr)
    }
  }
}
console.log(arr)
