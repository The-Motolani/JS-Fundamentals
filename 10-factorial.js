const { argv } = require("node:process");
let n = Number(argv[2]);

function factorial(n) {
  if (isNaN(n) || n < 0 || n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(n));
