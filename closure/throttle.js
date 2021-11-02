//1 situation ->2 solution ->3 detail

function throttle(fn, delay) {
  let begin = 0;
  let firstTime = true;
  return function () {
    let now = Date.now();

    if (firstTime) {
      fn.apply(this, arguments);
      firstTime = false;
    } else {
      if (now - begin > delay) fn.apply(this, arguments);
      begin = now;
    }
  };
}
