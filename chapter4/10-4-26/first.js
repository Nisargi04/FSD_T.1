var express=require("express");
var app=express();
student={"name":"test","age":20}

app.get("/",(req,res)=>
{
   // res.set("content-type","text/html")
   res.type("text/html");
    //res.setHeader("content-type","text/html")
    res.write("<h3>hi</h3>");
    //res.send("<h2>express js</h2>")
    app.get("/about",(req,res)=>{
        res.send(`<h2 style=color:purple>express example</h2>`)
    })
    app.get("/about",(req,res)=>{
        res.send(`<h2 style=color:purple>express example</h2>`)
    })
    app.get("/j1",(req,res)=>{
        res.send(student)
    })
    app.get("/j2",(req,res)=>{res.json(student)})
    app.get("/j3",(req,res)=>{
        res.write(JSON.stringify(student));
        res.send()
    })
})
app.listen(3000,"localhost",100,()=>{console.log("server started")})