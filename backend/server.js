const mongoose=require('mongoose');
const dotenv=require('dotenv');
const express = require("express"); 


//starting the app
const app=express();
 
dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());


app.use(require('./router/auth')); 

//database
const DB =process.env.DATABASE;
const PORT=process.env.PORT;




//middleware
const middleware=(req,res,next)=>{
    console.log("my middleware");
    next();
}



//routes
app.get('/',(req,res)=>{
    res.json({message:  'welcome to the app'})
})



app.get('/about',middleware,(req,res)=>{
    res.json({message:'welcome to about page'})
})

//listen to the request
 
app.listen(process.env.PORT, ()=>{
    console.log("listening on port ",process.env.PORT)
}) 


