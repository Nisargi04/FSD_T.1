var express=require("express");
var app=express();
app.get("/user/:uid/branch/:b",(req,res)=>
{
    res.write(JSON.stringify(req.params));
    res.write(JSON.stringify(req.query));
    res.send();//send ma kai lakhvu nahi varna error avshe
    //after writing res.write()
})
app.listen(7007)
