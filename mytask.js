var express=require("express");
var app=express();
app.set("view engine","ejs")
app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.render("form")
})
app.post("/result",(req,res)=>{
    var m=req.body.marks1;
    var m1=req.body.marks2;
    var s=req.body.subject;
    var n=req.body.uname;
    var total=(parseInt(m1))+(parseInt(m))
    res.render("result",{m,m1,s,n,total})
})
app.listen(5006)