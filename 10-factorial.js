const { argv } = require("node:process");
let n = Number(argv[2]);

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(n));
