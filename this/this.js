//window
console.log(this);

const x = 1;
function test() {
  console.log(this.x);
}

test();

//object method → object
const obj = {
  x: 1,
  logX() {
    console.log(this.x);
  },
};

//Constructor Function && Class → new Obj
function Test(number) {
  this.x = number;
}

const result = new Test(10);
console.log(result.x);
