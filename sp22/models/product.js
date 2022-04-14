import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name : {
        type: String,
        minlength: 3,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String
    }
},{ timestamps : true});

export default mongoose.model('Product',productSchema);