let text = "China";
const mySet = new Set(text); // Set(5) {'C', 'h', 'i', 'n', 'a'}

mySet.size; // 5

//case sensitive & duplicate omission
new Set("Firefox"); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set("firefox"); // Set(6) { "f", "i", "r", "e", "o", "x" }
