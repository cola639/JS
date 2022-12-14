// 抽取属性 组成新的 key -> value对象数组
const recursionFileMap = obj => {
  let arr = []
  obj.map(item => {
    let obj = {
      value: '',
      label: '',
      children: []
    }
    obj.value = item.name
    obj.label = item.name
    if (item.children) {
      obj.children = recursionFileMap(item.children)
    }
    arr.push(obj)
  })
  return arr
}

const info = [
  {
    name: 'test1',
    children: [{ name: 'test1-1' }, { name: 'test1-2', children: [{ name: 'test1-2-1' }] }]
  },
  {
    name: 'test2',
    children: [{ name: 'test2-1' }, { name: 'test2-2', children: [{ name: 'test2-2-1' }] }]
  }
]

const res = recursionFileMap(info)
console.log('🚀 >> res', JSON.stringify(res))
