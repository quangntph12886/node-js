import mongoose, {Schema} from "mongoose";

const categorySchema  = new Schema({
    name : {
        type: String,
        minlength: 3,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{ timestamps : true});

export default mongoose.model('Category',categorySchema );