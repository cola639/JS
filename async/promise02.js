let p1 = new Promise((resolve, reject) => {
  console.log("p1 executor");
  setTimeout(resolve, 1000);
});

//此处返回一个function 不是一个 Promise对象
p1.then(() => {
  new Promise((resolve, reject) => {
    console.log("p2 executor");
    setTimeout(resolve, 1000);
  });
})
  .then(
    () =>
      new Promise((resolve, reject) => {
        console.log("p3 executor");
        setTimeout(resolve, 1000);
      })
  )
  .then(
    () =>
      new Promise((resolve, reject) => {
        console.log("p4 executor");
        setTimeout(resolve, 1000);
      })
  );

//extract
function delayResolve(str) {
  return new Promise((resolve, reject) => {
    console.log(str);
    setTimeout(resolve, 1000);
  });
}

delayResolve("p1 executor")
  .then(() => delayResolve("p2 executor"))
  .then(() => delayResolve("p3 executor"))
  .then(() => delayResolve("p4 executor"));
