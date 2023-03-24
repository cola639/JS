const Fuse = require('./fuse.min')
const searchPool = require('./data')
const query = '系统管理'

console.log('searchPool: ', searchPool)
console.log('query: ', query)

let fuseSearch = undefined
initFuse(searchPool)
const searchRes = fuseSearch.search(query)
console.log('searchRes: ', searchRes)

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
