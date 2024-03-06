// 1 Math.random()
const randomRes = Math.random()
console.log('randomRes >> ', randomRes) // Output: 1 > res >= 0

// 2 Math.floor() 向下取整 不遵循四舍五入
const floorRes = Math.floor(9.9)
console.log('floorRes >> ', floorRes) // Output: 9

// 3 Math.ceil() 向上取整  遵循四舍五入
const ceilRes = Math.ceil(9.1)
console.log('ceilRes >> ', ceilRes) // Output: 10

// 4 生成10内包括0-9
const zeroToNine = Math.floor(Math.random() * 10)
console.log('0-9 >> ', zeroToNine) // Output: 0-9

// 5 Infinity 无限大
const max = Infinity

// 6 -Infinity 无限小
const min = -Infinity
