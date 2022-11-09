const express= require('express');
const router=express.Router();
const Cart=require("../model/cart_mod");
var mongoose = require('mongoose'); 

const Bill=require("../model/order");
router.post('/add',async (req,res)=>{

    var total=Number(req.body.price)*Number(req.body.qty);

    var pid=mongoose.Types.ObjectId(req.body.pid);

    var rdata=await Cart.find({pid:pid,cid:req.body.cid});

    if(rdata.length>0){

        var fqty=Number(req.body.qty)+Number(rdata[0].qty);
        var ftotal=Number(req.body.price)*Number(fqty);

        var obj={
            
           
            qty:fqty,
            total:ftotal,
        
           };

        await Cart.findByIdAndUpdate(rdata[0]._id,obj);

    }else{
        var obj={
            cid:req.body.cid,
            pid:req.body.pid,
            price:req.body.price,
            qty:req.body.qty,
            total:total,
        
           };
        
           await Cart.create(obj);
        
    }

   
   res.json({msg:"Inserted"});
   

});

router.post("/delc",async (req,res)=>{
await Cart.findByIdAndDelete(req.body.did);

res.json({msg:'deleted'});
})


router.post("/list",async (req,res)=>{
    var alldata=await Cart.aggregate([{
        $match:{cid:req.body.cid}},
        {$lookup: {
        from: "products",
        localField: "pid",
        foreignField: "_id",
        as:"pd"
        }}]);

res.json(alldata)

})



router.post("/confirmorder",async (req,res)=>{
  
   var resl=await Cart.find({cid:req.body.cid})
   for(var i=0;i<resl.length;i++){
 
    var obji={
        cid:req.body.cid,
        pid:resl[i].pid,
        price:resl[i].price,
        qty:resl[i].qty,
        total:resl[i].total,
     
    };
    await Bill.create(obji);

    await Cart.findByIdAndDelete(resl[i]._id);
   }

    res.json({msg:"Order placed successfully"});


})


module.exports=router;

