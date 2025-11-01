// blocking
let fs = require('fs');

console.log(1);
let result = fs.readFileSync('sam.txt' , {encoding: 'utf-8'})
console.log(result);
console.log(2); 
console.log(3);

// --------------------------------------
// non-blocking
let fs = require('fs');

console.log(1);
fs.readFile('sam.txt' , {encoding: 'utf-8'}, (err,data)=>{
    if(err){ throw err}
    else{
        console.log(data);
    }
})
console.log(2);
console.log(3);
