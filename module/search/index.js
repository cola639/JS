const Fuse = require('./fuse.min')
const searchPool = require('./data')

console.log('🚀 >> searchPool:', searchPool)
const query = '系统管理'
let fuseSearch = undefined

function initFuse(list) {
  fuseSearch = new Fuse(list, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}

initFuse(searchPool)
const searchRes = fuseSearch.search(query)
console.log('🚀 >> searchRes:', searchRes)
