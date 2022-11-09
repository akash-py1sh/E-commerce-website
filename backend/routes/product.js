const express= require('express');
const router=express.Router();
const Product=require("../model/product_mod");
const mongoose = require('mongoose'); 

const fs=require("fs");

router.post('/add',async (req,res)=>{

     console.log(req.body)
    var pimgobj=req.files.pimg;
    pimgobj.mv("./public/product_img/"+pimgobj.name,async (err)=>{
        if(err){
            throw err;
        }else{
            var objins={
                category:mongoose.Types.ObjectId(req.body.category),
                pname:req.body.pname,
                pprice:req.body.pprice,
                pimg:pimgobj.name
            };

            await Product.create(objins)

            res.json({msg:"Inserted"});
        }
    })
   
  
   

});

router.get("/listall",async (req,res)=>{
  
    
    var resl=await Product.find();
    res.json(resl);


})

router.post("/list",async (req,res)=>{
    var cat=mongoose.Types.ObjectId(req.body.cid);
    
    var resl=await Product.find({category:cat});
    res.json(resl);


})
router.post("/listallcat",async (req,res)=>{
    var cat=mongoose.Types.ObjectId(req.body.cid);
    
    var resl=await Product.find({category:cat});
    res.json(resl);


})


router.post("/delproduct",async (req,res)=>{
    var id=req.body.id;

    var data=await Product.findById(id);

    fs.unlinkSync("./public/product_img/"+data.pimg);

    await Product.findByIdAndDelete(id);

    var cat=mongoose.Types.ObjectId(req.body.cid);
    
    var resl=await Product.find({category:cat});
    res.json(resl);


})


module.exports=router;

