// break 跳出循环
// continue 跳过剩余部分

for (let i = 0; i < 3; i++) {
  if (i === 1) break
  console.log('i break >> ', i) // 0
}

for (let i = 0; i < 3; i++) {
  if (i === 0) continue
  console.log('i continue >> ', i) // 1 2
}

let i = 0
while (i < 3) {
  if (i === 1) break // 跳出循环
  console.log('j break >> ', i) // 0
  i++
}

let j = 0
while (j < 3) {
  if (j === 1) {
    j++
    continue // 跳过剩余部分
  }
  console.log('j continue >> ', j) // 此处将打印 0 和 2
  j++
}
