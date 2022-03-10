import { Router } from "express";
const router = Router();

const check = (req,res,next) =>{
    const status = true;
    if(status){
        console.log("hello");
        next();
    }else{
        console.log("?????????");
    }
}

router.get('/broduck',check,(req,res)=>{
    const products = [
        {id:1,name:"alo"},
        {id:2,name:"blo"}
    ];
    res.json(products);
});

router.post('/broduck',check,(req,res)=>{

    const products = [
        {id:1,name:"alo"},
        {id:2,name:"blo"}
    ];
    products.push(req.body);
    res.json(products);
})

export default router;