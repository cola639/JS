//shallow copy
//[...a]

//deep copy
const A = {
  data: { num: 10 },
  say: function () {
    console.log("say");
  },
  name: "martin",
};

//递归深拷贝
////1 对输入数据类型判断 2 创建空数组或空对象 3 hasOwnProperty只对属性遍历 4递归进行遍历赋复制
function deepClone(obj) {
  if (!obj || typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    //避免拷原型链内容
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

const result = deepClone(A);
console.log(result);
