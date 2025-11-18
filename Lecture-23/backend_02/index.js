// import express from 'express'
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurant.routes')
const userRoutes = require('./routes/user.routes')
const cors = require('cors')

 
// mongoose.connect('mongodb://127.0.0.1:27017/test') //local link - my machine
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:56FI1xyyez2DuBr6@cluster0.xwxmmum.mongodb.net/') //cloud link 
.then(function(){console.log("DB connected") })
.catch(function(){console.log("DB NOT connected") })

app.use(express.json()) // body parsing middleware

app.get('/' , (req,res)=>{ //ROOT ROUTE
    res.send("welcome to root route")
})

app.use(cors()) //CORS

restaurantRoutes(app)
userRoutes(app)

const PORT = 8000
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT:${PORT}`);
})



// samarthvohraindia_db_user
// 56FI1xyyez2DuBr6