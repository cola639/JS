const add = (function counter() {
  const counter = 0;
  return function () {
    return console.log((counter += 1));
  };
})();

add();
