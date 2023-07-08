const mongoose=require('mongoose');
const schema=mongoose.Schema;

let user=new schema({
    name:{
        type:String,
        required:true,
        unique : true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique : true,
        dropDups: true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:[3,"minimum letter 3"],
        trim:true
    }
},
    {
        collection:"userData"
    }
)



module.exports=mongoose.model("user",user)