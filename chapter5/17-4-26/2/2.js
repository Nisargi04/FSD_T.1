var express=require("express")
var app=express();
app.use(express.static("Frontend"))
app.listen(3004)