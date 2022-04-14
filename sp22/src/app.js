
const express = require("express");
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';


import product from '../routes/product';
import auth from '../routes/auth'
//middleware
const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

//route
app.use("/api",product)
app.use("/api",auth)

//connect database

mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("ket noi thanh cong"))
    .catch(console.log("error"));


const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("server is running",PORT);
})