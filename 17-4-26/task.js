var express=require("express")
var app=express()
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send(`<form action="/login" method="post">
    Username<input name="un" type="text"></input>
    Password<input name="pass" type="password"></input>
    <input type="submit" value="submit"></input></form>`)
    
})
var check=(req,res,next)=>{
    if(req.body.un=="admin" && req.body.pass==1234){
        next()
    }
    else{
        res.send("invalid")
        next()
    }}
app.post("/login",check,(req,res)=>{
    res.send(`welcome ${req.body.un}`)
})
app.listen(2002)