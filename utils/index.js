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
 * If empty obj
 *
 * @param {string} url
 * @returns {boolean}
 */
export function isEmptyObj(obj) {
  const arr = Object.keys(obj)
  return arr.length === 0
}
