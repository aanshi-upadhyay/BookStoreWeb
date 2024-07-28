import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
    try {
         const {fullname,email,password}=req.body;
         const user  = await User.findOne({email})
         if(user){
            return res.status(400).json({message:"User already exists"})
         }
         const hashPassword = await bcryptjs.hash(password, 10);


         const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
         })
        await createdUser.save()
         res.status(201).json({message:"User created successfully",user:{
            _id: createdUser._id,
            fullname: createdUser.fullname, 
            email:createdUser.email,
  } })
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal server error"})
    }
}


export const submit=async(req,res)=>{
    try {
         const {name,email,Message}=req.body;

         const submitUser = new User({
            name: name,
            email: email,
            Message: Message,
         })
        await submitUser.save()
         res.status(201).json({message:"Submitted successfully",user:{
            _id: submitUser._id,
            name: submitUser.name, 
            email:submitUser.email,
            Message:submitUser.Message,
  } })
} catch (error) {
    console.log("Error: " + error.message)
    res.status(500).json({message:"Internal server error"})
}
}


export const login=async(req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!user || ! isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else{
            res.status(200).json({message:"Login Successsful",user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email
            }})
        }
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message:"Internal server error"})

    }
}