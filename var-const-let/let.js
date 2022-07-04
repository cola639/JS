// 1 let block scope {  }
if (true) {
  let age = '18'
  console.log(age)
}
console.log(age) // error

for (let i = 0; i < 5; i++) {
  // loop condition
}
console.log(i) //error

// 2 let repeat declaration
var name
var name // ok

let name
let name // error

// 3 let hoist declaration
console.log(a) // undefined value hoist
var a = '1'

console.log(b) // referenceError
let b = '1'
