var url = 'www.imooc.com?name=xiaodangao&age=22&sex=0&phone=19023271580'

function fetchData(url) {
  var obj = {}
  var temp
  var paramsGroup = url.split('?')[1] //name=QinYanFei&age=22&sex=0&phone=13083771680
  var paramsObj = paramsGroup.split('&') // ["name=QinYanFei", "age=22", "sex=0", "phone=13083771680"]
  for (var index of paramsObj) {
    //for in是遍历（object）键名，for of是遍历（array）键值。
    console.log(index) //name=QinYanFei,age=22...
    temp = index.split('=') // 依次["name", "QinYanFei"]  ["age", "22"]  ["sex", "0"] ["phone", "13083771680"]
    obj[temp[0]] = temp[1] //键值：键名
  }
  return obj
}
fetchData(url) //{name: "xiaodangao", age: "22", sex: "0", phone: "13083771680"}
