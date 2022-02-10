const obj = { x: 1 };

function changeObj1(obj) {
  obj.x = 2;
}

//1 obj as value
changeObj1(obj); //changed

//2 obj.x  as value
function changeObj2(obj) {
  obj.x = 3;
}
changeObj2(obj.x); //no changed

//3 obj delivered then changed it
function changeObj3(obj) {
  obj.x = 2;
  obj = { x: 4 };
}
changeObj3(obj.x); //obj = {x : 2}
