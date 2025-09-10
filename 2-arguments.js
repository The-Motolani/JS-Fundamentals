const { argv } = require('node:process');
const args = argv.slice(2);
    if (args.length == 1 ) {
  console.log("Argument found");
}
else if (args.length >= 2) {
  console.log("Arguments found");
}
else {
  console.log("No argument");
}