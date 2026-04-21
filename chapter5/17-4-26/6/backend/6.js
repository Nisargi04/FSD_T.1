var express=require("express")
var app=express();
var path=require("path")
var sp=path.join(__dirname,"../frontend")
app.use(express.static(sp,{index:"6.html"}))
app.listen(3008)