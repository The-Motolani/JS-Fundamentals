const { argv } = require('node:process');

// print process.argv

 if (argv.length >= 2) {   
        console.log(`${argv[2]} is ${argv[3]}`);
} 
// console.log(argv[2]);