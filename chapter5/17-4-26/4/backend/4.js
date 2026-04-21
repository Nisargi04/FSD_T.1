var express=require("express")
var app=express();
var path=require("path")
var sp=path.join(__dirname,"../")
app.use(express.static(sp))
app.listen(3006)