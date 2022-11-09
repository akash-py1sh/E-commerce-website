const mongoose = require('mongoose');
const cartSchema=mongoose.Schema({
    cid:String,
    pid:mongoose.Schema.Types.ObjectId,
    price:Number,
    qty:Number,
    total:Number
});

module.exports=mongoose.model('Cart',cartSchema);