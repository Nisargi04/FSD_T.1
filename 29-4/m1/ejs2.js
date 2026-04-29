var express=require("express")
var app=express();
var path=require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"ejs"))
app.get("/",(req,res)=>{
    res.render("ejs1");

})
app.listen(6001)
//ejs and js file sathe hoi naki ejs view ma to kai rite run karavu e mate nu