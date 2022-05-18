// concat
let colors = ['red', 'green', 'blue']
let colors2 = colors.concat('yellow', ['black', 'brown'])

console.log(`colors not changed [${colors}], return newArray [${colors2}]`)

// slice()
colors = ['red', 'green', 'blue', 'yellow', 'black', 'brown']
colors2 = colors.slice(1)
let colors3 = colors.slice(1, 3)

console.log(
  `colors not changed [${colors}], return newArray [${colors2}], return newArray [${colors3}]`
)

// splice()
colors = ['red', 'green', 'blue']
// 1 removed
let removed = colors.splice(0, 1) //index,delete count
console.log(`colors changed: [${colors}], removed: ${removed}`)

// 2 insert
let inserted = colors.splice(1, 0, 'yellow', 'orange')
console.log(`colors changed: [${colors}], inserted: ${inserted}`)

// 3 replace
let replaced = colors.splice(1, 1, 'red', 'purple')
console.log(`colors changed: [${colors}], replaced: ${replaced}`)
