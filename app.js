const express=require("express");
const cors= require ("cors")
const mongoose=require('mongoose');
const app=express();
const routes= require("./routes/routerPath")
const fileupload=require('express-fileupload');
const passport=require("passport")

require('dotenv').config();
require('./middlewares/passportConfig')

app.use(express.json())
app.use(cors())
app.use(fileupload({
    useTempFiles:true
}))
app.use(passport.initialize())


//PORT connection
const port= process.env.PORT||6000;
app.listen(port,()=>{
    console.log(`listening port ${port}`);
});


// mongoDb connection
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('connected Successfully...'))
    .catch((err)=> console.log(err))



   app.use('/',routes);

   app.use(function(err,req,res,next){
    console.log(err.message);
    if(!err.statusCode)err.statusCode=500;
    res.status(err.statusCode).send(err.message);
    });