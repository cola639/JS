// output 0, 1, 2, 3
for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

//  output 4, 4, 4, 4
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
