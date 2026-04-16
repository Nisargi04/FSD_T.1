var express=require("express")
var app=express();
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="get">
    username<input name="un"></input>
    password<input type="password" name="pass"></input>
    <input type="submit" value="submit"></input></form>`);
})
app.get("/data",(req,res)=>{
    res.send(`<h1>welcom ${req.query.un}!</h1>
    <h2> your password is ${req.query.pass}</h2>`)
})
app.listen(9002)