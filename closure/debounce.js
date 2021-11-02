function debounce(fn, delay) {
  let t;
  return function () {
    t && clearTimeout(t);

    t = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
