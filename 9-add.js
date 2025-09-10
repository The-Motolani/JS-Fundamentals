const {argv} = require("node:process");
if (argv.length > 2) 
{ 
    function add(a, b) 
    {
        return Number(a) + Number(b);
    }  
    console.log(`${add(argv[2], argv[3])}`);
}
else
{
    console.log("NaN");
}