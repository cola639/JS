// shallow clone
// [...a]

// deep clone
const cloneObj1 = {
  data: { name: 'john', age: 10 },
  say: function () {
    console.log('say')
  },
  name: 'martin',
}

const cloneObj2 = [
  { score: 1, avatar: 'test.url1' },
  { score: null, avatar: 'test.url2' },
]

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

function strictDeepClone(data) {
  // string,number,bool,null,undefined,symbol
  // object,array,date
  if (data && typeof data === 'object') {
    // 针对函数的拷贝
    if (typeof data === 'function') {
      let tempFunc = data.bind(null)
      tempFunc.prototype = strictDeepClone(data.prototype)
      return tempFunc
    }

    switch (Object.prototype.toString.call(data)) {
      case '[object String]':
        return data.toString()
      case '[object Number]':
        return Number(data.toString())
      case '[object Boolean]':
        return new Boolean(data.toString())
      case '[object Date]':
        return new Date(data.getTime())
      case '[object Array]':
        const arr = []
        for (let i = 0; i < data.length; i++) {
          arr[i] = strictDeepClone(data[i])
        }
        return arr

      // js自带对象或用户自定义类实例
      case '[object Object]':
        const obj = {}

        for (let key in data) {
          // 会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
          if (obj.hasOwnProperty(key)) {
            obj[key] = strictDeepClone(data[key])
          }
        }
        return obj
    }
  } else {
    //string,number,bool,null,undefined,symbol
    return data
  }
}

let result = deepClone(cloneObj1)
console.log(result)

result = strictDeepClone(cloneObj2)
console.log(JSON.stringify(result))
