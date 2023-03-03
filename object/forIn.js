let obj = { a: '1', b: '2', c: '3', d: '4' }
for (let o in obj) {
  console.log(o) //遍历的实际上是对象的属性名称 a,b,c,d
  console.log(obj[o]) //这个才是属性对应的值1，2，3，4
}
