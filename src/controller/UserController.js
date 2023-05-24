const asyncHandler=require("express-async-handler")
const User=require("../models/UserModel")
const bcrypt=require("bcrypt");


//@desc Register a user
//@route POST /api/user/register
//@access public
const registerUser=asyncHandler(async(req,res)=>{
    const {userName,email,password}=req.body
    if(!userName || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvaible=await User.findOne({email})
    if(userAvaible){
        res.status(400)
        throw new Error("user already registered")
    }
    //create Hash Password'
    const hashedPassword=await bcrypt.hash(password,10)
    console.log("Hashed password: ",hashedPassword)
    //create new User
    const user=await User.create({
        userName:userName,
        email:email,
        password:hashedPassword
    })
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("user data is not valid")
    }
    res.json({message:"Register the user"})
})

//@desc Login a user
//@route POST /api/user/login
//@access public
const loginUser=asyncHandler(async(req,res)=>{
    res.json({message:"Login the user"})
})

//@desc Current user info
//@route Get /api/user/current
//@access private
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"current the user"})
})

module.exports={registerUser,loginUser,currentUser}