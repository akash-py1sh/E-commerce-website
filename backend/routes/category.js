const express= require('express');
const router=express.Router();
const Category=require("../model/category_mod"); 
router.post('/add',async (req,res)=>{

   var obj={
    cat_name:req.body.cat
   };

   await Category.create(obj);

   res.json({msg:"Inserted"});
   

});

router.get("/list",async (req,res)=>{

   var allcat=await Category.find();

   res.json(allcat);

});

router.post("/delcat",async (req,res)=>{
   var id=req.body.id;
 
   await Category.findByIdAndDelete(id);

   res.json({msg:"Deleted"});

})

module.exports=router;

