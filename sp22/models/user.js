import mongoose, {Schema} from "mongoose";
import { createHmac } from "crypto";

const userSchema = new Schema({
    name : {
        type: String,
        minlength: 5,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    salt:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
},{ timestamps : true});

userSchema.methods = {
    authenticate(password){
        return this.password == this.encrytPassword(password)
    },
    encrytPassword(password){
        if(!password) return
        try{
            return createHmac("sha512","alo").update(password).digest("hex");

        }
        catch(error){
            console.log("error")
        }
    }
}
userSchema.pre("save",function(next){
    this.password = this.encrytPassword(this.password);
    next();
})


export default mongoose.model('User',userSchema);