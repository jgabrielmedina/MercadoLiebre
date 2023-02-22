const express = require("express")

const app = express()

const path = require('path')

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log("servidor corriendo")
})

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

/* app.get('/home',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home2.html'))
}) */

app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})