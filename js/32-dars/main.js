// Algo masalalari

// Helper Functions

function factorial(n) {
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res = res * i;
  }

  return res;
}

// End Helper Functions

// 35

function algo35(a, b, c) {
  if (a >= b && b >= c) {
    a *= 2;
    b *= 2;
    c *= 2;
  }

  console.log(a);
  console.log(b);
  console.log(c);
}

// algo35(2, -1, -3);
// algo35(6, 6, 6);

// 36

function algo36(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(a);
    console.log(b);
  }
}

// algo36(8, 1)

// 63

function algo63(n) {
  let S = 0;

  for (let i = 1; i <= n; i++) {
    S += Math.pow(-1, i - 1) / factorial(2 * i - 1);
    // i = 1;
    // S = 0 + -1 ^ 0 / factorial(1) = 1;
    // i = 2;
    // S = 1 + -1 ^ (2 - 1) / factorial(2 * 2 - 1) = 1 +  -1 ^ 1 / factorial(3) = 1 - 1 / 6 = 5 / 6
  }

  return S;
}

// console.log(algo63(2));

function algo74(x, n) {
  let S = 0;

  for (let i = 1; i <= n; i++) {
    S += Math.pow(x, 2 * i - 1) / factorial(2 * i - 1);
  }

  return S;
}

// console.log(algo74(2, 2));

function fizzBuzz(n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    res.push(i.toString());
    if (i % 15 === 0) res[i - 1] = "FizzBuzz";
    else if (i % 3 === 0) res[i - 1] = "Fizz";
    else if (i % 5 === 0) res[i - 1] = "Buzz";
  }

  return res;
}

// console.log(fizzBuzz(15));
