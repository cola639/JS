new Promise(function (resolve, reject) {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(1);
    }, 1000);
  }

  resolve();
}).then(function () {
  console.log(2);
});
