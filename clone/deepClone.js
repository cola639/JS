// shallow clone
// [...a]

// deep clone
const cloneObj = {
  data: { name: 'john', age: 10 },
  say: function () {
    console.log('say')
  },
  name: 'martin',
}

// recursive
function deepClone(obj) {
  if (typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // hasOwnProperty避免拷原型链内容
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }

  return newObj
}

const result = deepClone(cloneObj)
console.log(result)
