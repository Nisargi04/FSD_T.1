var express=require("express")
var app=express();
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("myejs1",{name:"A",age:20});

})
app.listen(6007)