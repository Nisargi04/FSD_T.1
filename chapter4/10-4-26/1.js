var express=require("express");
var app=express();
student={"name":"test","age":20}
//cookie and session no diff e che k session server side store thashe jema sensitive info hoi shake
app.get("/",(req,res)=>
{
    res.type("text/html");
    res.write("<h3>hi</h3>");

    app.get("/j1",(req,res)=>{
        res.send(student.age)
    })
    app.get("/j2",(req,res)=>{res.json(student)})
    app.get("/j3",(req,res)=>{
        res.write(JSON.stringify(student));
        res.send()
    })
})
app.listen(3000,"localhost",100,()=>{console.log("server started")})