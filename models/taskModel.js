
const mongoose=require('mongoose')
const schema=mongoose.Schema;

let taskdata=new schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    },
    created_by:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:{

            values:["Active","Deactive"],
            message:`Value is not suppoting`,
        },
        required:true,

    },
    loc :  {
        type: { type: String },
        coordinates: []
        
    },

},
    {
        collection:"postData"
    }
)
taskdata.index({ "loc": "2dsphere" });

//collection name will be tableData
module.exports=mongoose.model("TaskData",taskdata)