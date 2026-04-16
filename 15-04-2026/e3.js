var express=require("express")
var app=express();
app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
    username<input name="un"></input>
    password<input type="password" name="pass"></input>
    <input type="submit" value="submit"></input></form>`);
})
app.post("/data",(req,res)=>{
    res.send(`<h1>welcom ${req.body.un}!</h1>
    <h2> your password is ${req.body.pass}</h2>`)
})

app.listen(8902)