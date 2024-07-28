import mongoose from "mongoose";

    const userSchema=mongoose.Schema({
        fullname:{
            type:String,
           
        },
        email:{
            type:String,
            required:true,
           unique:true,
        },
        password: {
            type:String,
           
        }, 
        name: {
            type:String,
           
        },
        Message: {
            type:String,
           
        },
    

});
const User = mongoose.model("User",userSchema);
export default User;