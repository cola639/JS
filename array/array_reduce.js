// grammar
// arr.reduce((accumulator,currentValue,index,array)=>{},initvalue)

// 1 accumulation

let arr = [{ x: 1 }, { x: 2 }, { x: 3 }]
let sum = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  (initialValue = 0)
)

console.log(sum) // logs 6

// 2 deduplication
// 思路:
// 1.先设置空对象标识,空数组装载
// 2.判断当前obj[key]是否添加,是跳过不处理,否设为操作过trur 添加进数组
// 3.返回累计数组
const users = [
  { id: 0, name: '小明' },
  { id: 1, name: '小张' },
  { id: 1, name: '小周' },
  { id: 2, name: '小陈' },
  { id: 2, name: '小李' },
  { id: 3, name: '小孙' }
]

function deduplication(arr) {
  const obj = {} // 空对象标识重复值
  return arr.reduce((accumulator, currentValue) => {
    obj[currentValue.id] ? null : (obj[currentValue.id] = true && accumulator.push(currentValue))
    return accumulator
  }, [])
}
console.log(deduplication(users))

// 3 flatten
// 思路：
// 判断是否为数组 递归遍历
const beforeFlatten = [[1, [2, 3]], 4, 5]

function flatten(beforeFlatten) {
  return beforeFlatten.reduce((accumulator, item) => {
    return accumulator.concat(item instanceof Array ? flatten(item) : item)
  }, [])
}

const res = flatten(beforeFlatten)
console.log(`flatten ${res}`)
