var guessNumber = function (n) {
  if (guess(Math.floor(n / 2)) === 1) {
    for (let i = Math.floor(n / 2); i <= n; i++) {
      if (guess(i) === 0) {
        return i;
      }
    }
  } else if (guess(Math.floor(n / 2)) === -1) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
      if (guess(i) === 0) {
        return i;
      }
    }
  } else {
    return Math.floor(n / 2);
  }
};
