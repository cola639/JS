const counter = { x: 2, y: 1, z: 1, a: 2 };

function findMax(counter) {
  array = Object.values(counter);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j] || array[i] === array[j]) {
        array.splice(j, 1);
      } else {
        array.splice(i, 1);
      }
    }
  }

  for (let item in counter) {
    if (counter[item] !== array[0]) {
      delete counter[item];
    }
  }

  return console.log(counter);
}

findMax(counter);
