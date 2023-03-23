/**
 * Get url params object
 *
 * @param {string} url
 * @returns {Object}
 */
export function paramsToObj(url = window.location.href) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
/**
 * Get url params object
 *
 * @param {string} url
 * @returns {Object}
 */
export function getUrlParams(url = window.location.href) {
  let obj = {}
  let temp
  let paramsGroup = url.split('?')[1] // name=QinYanFei&age=22&sex=0&phone=13083771680
  let paramsObj = paramsGroup.split('&') // ["name=QinYanFei", "age=22", "sex=0", "phone=13083771680"]
  for (let item of paramsObj) {
    // for in是遍历（object）键名，for of是遍历（array）键值。
    console.log(item) // name=QinYanFei,age=22...
    temp = item.split('=') // 依次["name", "QinYanFei"]  ["age", "22"]  ["sex", "0"] ["phone", "13083771680"]
    obj[temp[0]] = temp[1] // 键值 ：键名
  }
  return obj
}
/**
 * If empty obj
 *
 * @param {string} url
 * @returns {boolean}
 */
export function isEmptyObj(obj) {
  const arr = Object.keys(obj)
  return arr.length === 0
}
