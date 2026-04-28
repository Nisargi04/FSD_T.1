var express=require("express")
var app=express()
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"s4.html"}))
var mwdata=(req,res,next)=>{
    res.type("text/html")
    res.write(`<h1>welcome ${req.body.uname}</h1>
    <h2>Email is ${req.body.email}</h2>`)
    next()
   }
app.post("/login",mwdata,(req,res)=>{
    if(req.body.subs==="on"){
        res.write(`<h3>thank you for your subscription</h3>
        <a href="/">logout</a>`)
    }//checkbox ni default value on che if default na rakhvi hoi to checkbox ma value="" name lakhu
    else{
        res.write(`<h3>you can subscribe</h3><a href="/subscribe">subscribe</a>`)
    } 
    res.send()
})
app.get("/subscribe",(req,res)=>{
    res.send(`<h1>thank you for your subscription</h1><a href="/">logout</a>`)
})
app.listen(8080)