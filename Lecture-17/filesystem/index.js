const fs = require('fs');
const { throwDeprecation } = require('process');

// CRUD

// 1. CREATE
// let data = "I am Samarth Vohra"
// let data2 = "I AM MAVERICK"
// fs.writeFile('sam.txt',  )
// fs.writeFileSync('sam.txt', data, {flag:'w', encoding: 'utf-8'})
// fs.writeFileSync('sam.txt', data2) //prev data gets deleted

// --------------------------------
// 2. READ
// let result = fs.readFileSync('sam.txt', {encoding: 'utf-8'})
// let result = fs.readFileSync('sam.txt')
// console.log(result.toString()); //alternative

// ---------------------------------------------------------

// async Create
// let data = "You should eat healthy"
// fs.writeFile('mav.txt', data, {flag:'w', encoding:'utf-8'} , (err)=>{
//     if(err){ throw err }
//     else{ console.log("data seeded") }
// })

// --------------------------------

// async Read
// fs.readFile('mav.txt',{flag:'r', encoding:'utf-8'}, (err,resp)=>{
//     if(err){ throw err }
//     else{ console.log(resp,"data") }
// })

// ---------------------------------------------------------
// 3. Update
// let newData = "I will not tell the data"
// fs.appendFileSync('mav.txt' , newData)

// --------------------------------

// 4. Copy
fs.copyFileSync('mav.txt' , 'vohra.txt')

// --------------------------------

// 5. Delete
fs.unlinkSync('vohra.txt')