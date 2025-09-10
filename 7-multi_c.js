const {argv} = require('node:process');
const words = "C is fun";

if (isNaN(argv[2])) {
    console.log("Missing number of occurrences");
    }
else {  

for (let i = 0; i < argv[2]; i++) {
    console.log(words);
}
}
    //console.log(argv[2]);
