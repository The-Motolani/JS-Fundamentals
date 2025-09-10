const {argv} = require('node:process');
const words = "C is fun";

if (Number(argv[2]) >= 0 && !isNaN(argv[2])) {
    for (let i = 0; i < argv[2]; i++) {
    console.log(words);
    }
}
else {  
console.log("Missing number of occurrences");
}
    //console.log(argv[2]);
