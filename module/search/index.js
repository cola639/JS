const Fuse = require('./fuse.min')
const searchPool = require('./data')
const query = '系统管理'

console.log('searchPool: ', searchPool)
console.log('query: ', query)

function initFuse(list) {
  const fuseSearch = new Fuse(list, {
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

  return fuseSearch
}

let searchEngine = initFuse(searchPool)

const searchRes = searchEngine.search(query)
console.log('searchRes: ', searchRes)
