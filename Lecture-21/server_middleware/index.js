// create server
const express = require('express');
const app = express();

app.use(express.json()) //middleware fo req.body

// middleware 1
let price = 900;
app.use((req,res,next)=>{
    if(price >= 700){
        console.log("I am inside middleware 1");
        next()
    }else{
        res.send("Sorry not possible m1")
    }
})

// middleware-2
let password = "Samarth"
app.use((req,res,next)=>{
    if(password === "Samarth"){
        console.log("I am inside middleware 2");
        next();
    }else{
        res.send("Sorry not possible m2")
    }
})

// root route
app.get('/' , (req,res)=>{
    res.send("Hello welcome to root route")
})
app.get('/sam' , (req,res)=>{
    res.send("Hello welcome to sam route")
})
app.get('/vohra/sam/mav/:iddd' , (req,res)=>{
    console.log(req.url , "1"); // request url
    console.log(req.params , "2"); //dynamic path
    console.log(req.query , "3"); //dynamic path
    console.log(req.body , "4"); //dynamic path
    console.log(req.path , "5"); //dynamic path

    
    res.send("chocolate")
})
app.post('/vohra' , (req,res)=>{
    res.send("lolipop")
})

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})

