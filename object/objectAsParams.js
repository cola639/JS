const obj = { x: 1 };

function changeObj1(obj) {
  obj.x = 2;
}

//1 obj as value
changeObj1(obj);
console.log("obj as value", obj);
console.log("------------------");

//2 obj.x  as value
function changeObj2(obj) {
  obj.x = 3;
}
changeObj2(obj.x);
console.log("obj.x as value", obj);
console.log("------------------");

//3 obj delivered then changed it
function changeObj3(obj) {
  obj.x = 2;
  obj = { x: 4 };
  console.log("func changeObj3 inner obj", obj);
}
changeObj3(obj.x);
console.log("outside obj", obj);
console.log("------------------");
