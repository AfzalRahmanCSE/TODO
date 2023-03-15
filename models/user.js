const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    username:{
        type:String,
        required:[true,'Username is Mandatory']
        },
    password:{
        type:String,
        required:[true,'Password is Mandatory']
    },
    email:{
        type:String,
        required:[true,'email is Mandatory']
    },
    name:{
        type:String,
        required:[true,'Name is Mandatory']
    },
   

})