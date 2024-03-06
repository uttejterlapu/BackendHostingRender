const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const {UserController} = require('./controllers/UserController')

const app =express()

app.use(express.json())
app.use(cors())
app.use(helmet()) //for certain header

const port = 3000

app.get('/',(req,res)=> {
    res.send('hello world');
})

app.post("/user", UserController.registerUser)
app.get("/user/:id",UserController.getUser)

app.listen(port,()=>{
    console.log("port listening on port 3000")
})