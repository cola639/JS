// 1 var scope function
function test() {
  var message = 'hi'
}
test()
console.log(message) // error

for (var i = 0; i < 5; i++) {
  // loop condition
}
console.log(i) // ok

if (true) {
  var age = '18'
  console.log(age)
}
console.log(age) // ok

// 2 let repeat declaration
var name
var name // ok

let name
let name // error

// 3 var hoist declaration
console.log(a) // undefined
var a = '1'
