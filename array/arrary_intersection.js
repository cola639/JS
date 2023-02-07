const arr1 = [1, 2, 3, 4, 5, 6, 'a', 'b']
const arr2 = ['a', 'b', 1, 2]
const arr3 = arr1.filter(item => {
  return arr2.includes(item)
})
console.log(arr3) //[ 1, 2, 'a', 'b' ]
