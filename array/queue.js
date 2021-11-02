const colors = [];
const count = colors.push("red", "blue");
console.log(`length ${count}, original array has changed [${colors}]`);

const item = colors.shift();
console.log(item, colors);
