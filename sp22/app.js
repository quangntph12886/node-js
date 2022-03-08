const http = require('http');
const express = require("express");


//middleware
const app = express()
const check = (req,res,next) =>{
    const status = true;
    if(status){
        console.log("hello");
        next();
    }else{
        console.log("?????????");
    }
}

app.get('/broduck',check,(req,res)=>{
    const products = [
        {id:1,name:"alo"},
        {id:2,name:"blo"}
    ];
    res.json(products);
})



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