function tag(strings, ...values) {
  console.log(strings) // ["Hello ", " world ", "!"]
  console.log(values) // ["beautiful", "JavaScript"]
}

let adjective = 'beautiful'
let noun = 'JavaScript'

tag`Hello ${adjective} world ${noun}!`
