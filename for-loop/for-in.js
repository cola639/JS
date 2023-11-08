/**
 * for...in Object
 */

const obj = {
  name: 'john',
  age: 18
}

for (const key in obj) {
  console.log(key, obj[key])
}
