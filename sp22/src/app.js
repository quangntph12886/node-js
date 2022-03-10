// const http = require('http');
const express = require("express");
import cors from 'cors';
import morgan from 'morgan';
import product from '../routes/product'

//middleware
const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(product)

// const server = http.createServer((req,res)=>{
//     console.log("url",req.url);
//     if(req.url ==="/"){
//         res.setHeader('Content-Type',"text/html");
//         res.write("<html><h1>alo</h1></html>");
//         res.end();
//     }else if(req.url ==="/broduck"){
//         const products = [
//            
//         ]

//         res.end(JSON.stringify(products));
//     }else{
//         console.log('?????????')
//     }
// });


const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("server is running",PORT);
})