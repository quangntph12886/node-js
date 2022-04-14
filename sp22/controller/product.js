import Product from "../models/product";



//them
export const create = async (req,res) =>{
    try{
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "k them dc"
        })
    }
}

//list
export const list = async (req,res)=>{
    try{
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "k list dc"
        })
    }
}


//tim
export const read = async (req,res)=>{
    const filter = { _id: req.params.id}
    try{
        const product = await Product.findOne(filter);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

//remove
export const remove = async (req,res)=>{
    const condition = { _id: req.params.id}
    try{
        const product = await Product.findOneAndDelete(condition);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}


//update
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}