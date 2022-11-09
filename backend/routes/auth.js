const express= require('express');
const router=express.Router();
const Customer=require("../model/customer_mod");
const mongoose = require('mongoose'); 

const bcrypt=require("bcrypt");

router.post("/signup",async (req,res)=>{

    const salt=await bcrypt.genSalt(10);

    const hp=await bcrypt.hash(req.body.pass,salt);
  
    var objins={
        cname:req.body.name,
        cemail:req.body.email,
        cphone:req.body.phone,
        cpass:hp,
        address:req.body.address

    };
    await Customer.create(objins);

    res.json({msg:"Registration done successfully!"})
    

});

router.post("/login",async (req,res)=>{

    var e=req.body.email;
    var p=req.body.pass;

   

    var rs=await Customer.findOne({cemail:e});

    console.log(rs)
    if(rs!=null){
        bcrypt.compare(p,rs.cpass,(err,result)=>{
            if(result==true){

                res.json(rs);

            }else{
                res.json({msg:"Invalid email or password"});
            }
        })

    }else{
        res.json({msg:"Invalid email or password"});
    }

    
   
    

});



module.exports=router;