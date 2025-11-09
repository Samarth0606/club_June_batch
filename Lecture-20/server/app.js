const express = require('express') // return fn
const app = express() // return object =  instance of the entire application

const Blog = require('./models/Blog.model') //model

const mongoose = require('mongoose'); //ODM
mongoose.connect('mongodb://127.0.0.1:27017/book') //RETURNS A promise
.then((data)=>{ console.log("DB CONNECTED") })
.catch((err)=>{ console.log("DB NOT CONNECTED", err) })

// root path/route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/blogs' , async(req,res)=>{
    let allBlogs = await Blog.find() //returns a promise
    res.send(allBlogs)
})

// app.post()
// app.delete()
// app.patch()

const port = 8000
app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT: ${port}`)
})


