const {argv} = require('node:process');
const character = 'X';
let size = Number(argv[2]);
if (isNaN(argv[2])) {
  console.log("Missing size");
}
else {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += character;
    }
    console.log(row);
  } 
}