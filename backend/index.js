const express= require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors=require('cors');
const mongoose = require('mongoose');
const app=express();
mongoose.connect("mongodb+srv://akash:@cluster0.eiiho66.mongodb.net/ecom?retryWrites=true&w=majority");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
// parse application/json
app.use(bodyParser.json())
app.use(fileUpload());
const cr=require("./routes/category");
const pr=require("./routes/product");
const ar=require("./routes/auth");
const cart=require("./routes/cart");
app.get("/",(req,res)=>{
    res.send("hello express");
});
app.use("/cat",cr);
app.use("/cart",cart);
app.use("/product",pr);
app.use("/auth",ar);
app.listen(2000);
