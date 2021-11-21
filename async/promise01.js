// new Promise(function (resolve, reject) {
//   console.log(1111);
//   resolve(2222);
// })
//   .then(function (value) {
//     console.log(value);
//     return 3333;
//   })
//   .then(function (value) {
//     console.log(value);
//     throw "An error";
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// console.log("888");

let p1 = new Promise((resolve, reject) => {
  console.log("p1 executor");
  setTimeout(resolve, 1000);
});

p1.then(function () {
  new Promise((resolve, reject) => {
    console.log("p2 executor");
    setTimeout(resolve, 1000);
  });
})
  .then(function () {
    new Promise((resolve, reject) => {
      console.log("p3 executor");
      setTimeout(resolve, 1000);
    });
  })
  .then(function () {
    new Promise((resolve, reject) => {
      console.log("p4 executor");
      setTimeout(resolve, 1000);
    });
  });
