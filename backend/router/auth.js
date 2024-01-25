const jwt=require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcyrpt=require('bcryptjs');

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("helllloo");
});

router.post("/register", async(req, res) => {
  // console.log(req.body);
  // res.json({message:req.body});

  const { name, email, phone, work, password, cpassword } = req.body;
  // console.log(name);
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ err: "plz fill all the fields" });
  }

  try{
    const userExist=await User.findOne({ email: email });
    if (userExist) {
        return res.status(422).json({ err: "email exists" });
      }
      else if(password!=cpassword){
        return res.status(422).json({ err: "password does not match" });

      }
      else{
      const user = new User({ name, email, phone, work, password, cpassword });
     
      await user.save();

     res.status(201).json({ err: "user registered" });
    } 
  }
  catch(err){

    console.log(err);
  };
});


router.post('/signin',async (req,res)=>{
    try{
        const{ email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({message :"fill all the data"});
        }
       
          const Userlogin=  await User.findOne({email:email});

          if(Userlogin){ 
            
            const isMatch=await bcyrpt.compare(password,Userlogin.password);
            
            const token =await  Userlogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
              expires:new Date(Date.now+2589200000),
              httpOnly:true
            })
            if(!isMatch){
                res.status(400).json({message:"invalid credentials"})    ;

            }
            else{
                res.json({message:"user signed in"})    ;
            }

          }
          else{
            res.status(400).json({message:"invalid credentials"})    ;
          }
          
        
    }
    catch(err){res.json(err);

    }

});
module.exports = router;
