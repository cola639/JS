const map1 = new Map()

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)

hasKey = map1.has('a')
console.log('has ', hasKey)

console.log(map1)
// Expected output: 1

map1.set('a', 97)
map1.get('a')
console.log(map1.get('a'))
// Expected output: 97

console.log(map1.size)
// Expected output: 3

map1.delete('b')

console.log(map1.size)
// Expected output: 2

// 2 Array and Map
const map2 = new Map()
map2.set('a', 1)
map2.set('b', 2)
const arr = [...map2]
console.log(arr)
// Expected output: Array [ [ 'a', 1 ], [ 'b', 2 ] ]
