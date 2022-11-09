const mongoose = require('mongoose');
const pschema=mongoose.Schema({
    category:mongoose.Schema.Types.ObjectId,
    pname:String,
    pprice:Number,
    pimg:String
});

module.exports=mongoose.model('Product',pschema);