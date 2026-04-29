var express=require("express")
var app=express();
var path=require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname))
app.get("/",(req,res)=>{
    res.render("ejs");

})
app.listen(6009)
//ejs and js file sathe hoi naki ejs view ma to kai rite run karavu e mate nu