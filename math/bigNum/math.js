//0-1不包含1随机数,小数
//console.log(Math.random());

//地板取整,取最小整数
//console.log(Math.floor(45.9));

// 取规定范围整数
function getRandom(minNum, maxNum) {
  const choice = maxNum - minNum + 1 //0.01 0.99debug, do not add 1 situation
  return Math.floor(Math.random() * choice + minNum)
}

//console.log(getRandom(2, 5));

// 编写一个js函数，该函数有一个n（数字类型），其返回值是一个数组，该数组内是n个随机且不重复的整数，且整数取值范围是[2,32]

// 1.get range number
function getRandom(minNum, maxNum) {
  const choice = maxNum - minNum + 1
  return Math.floor(Math.random() * choice + minNum)
}

// 2.check indexOf
function checkIndex(num, array) {
  if (array.indexOf(num) > -1) return true
  return false
}

// 3.getArray
// 1.设置空数组装载 2判断n范围&&类型是否正确 3 for长度循环 进行取随机数
function getArray(n, minNum, maxNum) {
  let newArray = []
  const isRange = n >= minNum && n <= maxNum ? true : false
  const isNum = isNaN(Number(n))

  if (isNum) return

  if (isRange) {
    for (let i = 0; i < n; i++) {
      let num = getRandom(minNum, maxNum)
      if (checkIndex(num, newArray)) {
        i--
      }
      newArray.push(num)
    }
    return newArray
  }
}

console.log(getArray(20, 2, 32))
