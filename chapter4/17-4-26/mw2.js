var express=require("express");
var app=express();
var checkpass=(req,res,next)=>{
    var haspass=true;
    if(haspass){
        next()
    }
    else{
        res.send("no entry")
    }}
var data=(req,res,next)=>{
        req.name="nidhi";
        console.log("user varified");
        next();
    }

app.get("/",checkpass,data,(req,res)=>
{
    res.send(`<h1>welcome ${req.name}</h1>`)
})
app.listen(6007)