var express=require("express")
var app=express()
const sess=require("express-session")
app.use(sess({secret:"nishi",cookie:{maxAge:15000},name:"login"}));
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"s2.html"}))
app.post("/savesession",(req,res)=>{
    req.session.uname=req.body.uname;
    req.session.pass=req.body.pass;
    res.redirect("fetchdata")
})
app.get("/fetchdata",(req,res)=>{
    if(req.session.uname==="admin" && req.session.pass==="admin@123"){
        res.send(`<h1>welcome ${req.session.uname}</h1>
        <a href="/destroy">logout</a>`)
    }
    else{
        res.send(`<h1>please enter valid username and password</h>
        <a href="/">login</a>`)
    }
})
app.get("/destroy",(req,res)=>{
    req.session.destroy()
    res.send(`<h1>session destroyed</h1>
    <a href="/">login</a>
    `)
    //j vastu destroy thai gai che e vastu print karavie chie j nahi ave undefimed avshe jenathi prove thashe k e vastu alredy destroy thai gai che
//destroy thai gaya pachi access karvani try karie chie tethi error avshe
 
})
app.listen(8009)