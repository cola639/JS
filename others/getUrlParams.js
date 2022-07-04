// hash mode https://poc.videocomm.net/admin/index.html#/
let url = 'www.imooc.com?name=xiaodangao&age=22&sex=0&phone=19023271580' // history mode

function getUrlParams(url) {
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

getUrlParams(url) // {name: "xiaodangao", age: "22", sex: "0", phone: "13083771680"}
