const express = require('express');
const path = require('path');
const app = express();

app.set('view engine' , 'ejs'); //templates 
// app.set('views' , path.join(process.cwd() , 'views')) //avoid
app.set('views' , path.join(__dirname , 'views')) //better

let mentor = "Samarth Vohra"
let mentors = ['sam' , 'sonia' , 'gourav']
let todos = [
    { title:"Work", isCompleted: true },
    { title:"GYM", isCompleted: true },
    { title:"sleep", isCompleted: false }
]

app.get('/' , (req,res)=>{
    res.render('products/home', {mentor,mentors}) //to show pages/templates
})
app.get('/about' , (req,res)=>{
    res.render('products/about')
})

app.get('/todos' , (req,res)=>{
    res.render('products/todo', {todos})
})

app.get('/game' , (req,res)=>{
    let randNum = Math.floor(Math.random()*10);
    let luckyNum = 7;
    res.render('products/game', {randNum,luckyNum})
})

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})