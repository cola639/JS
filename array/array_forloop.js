const data = [
  {
    label: '发起考评',
    dealTime: '2022-12-14 01:00:15'
  },
  {
    label: '单位自评',
    name: '高新区环保局',
    dealTime: '2022-12-14 01:00:15'
  },
  {
    label: '区会总',
    dealTime: '2022-12-14 01:00:15'
  }
]

let res
const dataLength = data.length

for (let index = 0; index < dataLength; index++) {
  if (index === dataLength - 1 && data[index].dealTime) {
    res = 'done'
    break
  }
  if (!data[index].dealTime) {
    res = index
    break
  }
}
console.log('🚀 >> res', res)
