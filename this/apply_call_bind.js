function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation)
}

const person1 = { name: 'Alice' }
const person2 = { name: 'Bob' }

// 使用 call，this 指向 person1，传递参数列表
greet.call(person1, 'Hello', '!') // 输出：Hello, Alice!

// 使用 apply，this 指向 person2，传递参数数组
greet.apply(person2, ['Hi', '.']) // 输出：Hi, Bob.

// 使用 bind，this 绑定到 person1，返回一个新函数
const greetPerson1 = greet.bind(person1)
greetPerson1('Hey', '?') // 输出：Hey, Alice?
