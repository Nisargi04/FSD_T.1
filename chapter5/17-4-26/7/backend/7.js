var express=require("express")
var app=express();
var path=require("path")
var sp=path.join(__dirname,"../frontend")
app.use(express.static(sp))
app.get("/",(req,res)=>{
    res.sendFile(sp+"/7.html")
})
app.listen(3009)