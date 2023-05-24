const mongoose=require("mongoose")

const TodoSchema=mongoose.Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
  },
    fname:{
        type:String,
        required: [true,"please enter your first name"],
    },
    lname:{
        type:String,
        required: [true,"please enter your last name"],
    },
    email:{
        type:String,
        required:[true,"please enter your last name"],
    },
    contact:{
        type:String,
    },
    age: {
        type: Number,
        default: 0,
      },
      duration: {
        type: String,
      },
      country: {
        type: String,
        requied:false,
      },
      city: {
        type: String,
      },
      activityType: {
        type: String,
      },
      description: {
        type: String,
      },
      date: {
        type: String,
      },
},
{
    timestamps:true
});

module.exports=mongoose.model("Todos",TodoSchema);

