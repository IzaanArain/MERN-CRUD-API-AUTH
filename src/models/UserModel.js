const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:[true,"please enter user name"]
    },
    email:{
        type:String,
        required:[true,"please enter user email"],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"please enter user password"]
    },

},
{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema)
