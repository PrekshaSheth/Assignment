const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/demo'

const app = express()

var parser=require("body-parser");
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//connect to db
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log("connected with db..")
})

app.use(express.json())

const studentsRouter = require('./routers/students')
app.use('/students',studentsRouter)

app.listen(9000,function(){
    console.log("server is started...")
})