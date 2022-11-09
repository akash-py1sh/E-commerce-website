const mongoose = require('mongoose');
const catschema=mongoose.Schema({
    cat_name:String
});

module.exports=mongoose.model('Category',catschema);