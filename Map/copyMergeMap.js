// Map copy
const original = new Map(["1", "one"]);

const clone = new Map(original);

console.log(clone.get("1")); // one
console.log(original === clone); // false

// Map merge Map
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
const second = new Map([1, "uno"], [2, "dos"]);

let merged = new Map([...first, ...second]);
console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

// Map merge array
merged = new Map([...first, ...second, [1, "eins"]]);
console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
