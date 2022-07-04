const target = 'abc'
const source = 'abcaybec'

var subString = function (target, source) {
  let index = 0
  let reverseSource = source.split('').reverse().join('')
  let reverseTarget = target.split('').reverse().join('')
  let lenSource = reverseSource.length
  let lenTarget = reverseTarget.length

  for (let i = 0; i < lenSource; i++) {
    for (let j = 0; j < lenTarget; j++) {
      const tempIndex = reverseSource.indexOf(reverseTarget[j])
      if (tempIndex >= index && j !== lenTarget - 1) {
        index = tempIndex
      } else if (tempIndex < index || tempIndex === -1) {
        return -1
      } else {
        return lenSource - tempIndex - 1
      }
    }
  }
}

console.log(subString(target, source))
