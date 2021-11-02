//1.Object array value accumulation

const array1 = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);

console.log(sum);

//2.Object array depuliation
////1.先设置空对象,空数组装载 2.判断当前obj[key]是否添加,是跳过不处理,否设为操作过trur 添加进数组，3 返回累计数组
let users = [
  { id: 0, name: "小明" },
  { id: 1, name: "小张" },
  { id: 2, name: "小李" },
  { id: 3, name: "小孙" },
  { id: 1, name: "小周" },
  { id: 2, name: "小陈" },
];

let obj = {};

let newArray = users.reduce((accumulator, currentValue) => {
  obj[currentValue.id]
    ? "" //什么都不做的处理
    : (obj[currentValue.id] = true && accumulator.push(currentValue)); //先设置为true 再push
  return accumulator;
}, []);

console.log(newArray);
