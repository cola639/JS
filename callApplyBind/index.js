/** 1 call */
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation)
}

const person1 = { name: 'Alice' }

greet.call(person, 'Hello', '!') // 输出: Hello, Alice!

/** 2 apply */
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation)
}

const person2 = { name: 'Alice' }

greet.apply(person, ['Hello', '!']) // 输出: Hello, Alice!

/** 3 call vs apply */
const numbers = [5, 6, 2, 3, 7]

// 使用 call
const maxCall = Math.max.call(null, 5, 6, 2, 3, 7)
console.log(maxCall) // 输出: 7

// 使用 apply
const maxApply = Math.max.apply(null, numbers)
console.log(maxApply) // 输出: 7
