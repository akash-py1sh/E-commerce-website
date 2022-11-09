const mongoose = require('mongoose');
const custschema=mongoose.Schema({
    cname:String,
    cemail:String,
    cphone:String,
    cpass:String,
    address:String
});

module.exports=mongoose.model('Customer',custschema);