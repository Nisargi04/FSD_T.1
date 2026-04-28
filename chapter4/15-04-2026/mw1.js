var express=require("express")
var app=express();
var first=(req,res,next)=>{
    console.log("first middleware");
    next();
}
var second=(req,res,next)=>{
    console.log("second middleware")
    next()
}
app.use("/",first,second)
app.get("/",(req,res)=>{
    res.send("home page");
})
app.get("/about",first,(req,res)=>{
    res.send("about page")
})
app.listen(3004)