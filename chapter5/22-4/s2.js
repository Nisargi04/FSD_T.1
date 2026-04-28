var express=require("express")
var app=express()
const sess=require("express-session")
app.use(sess({secret:"nishi",cookie:{maxAge:15000},name:"login"}));
//secret is mendatory, session mate cookie generate thashe jema name attribute thi name set thai shake and e cookie kya sudhi reshe e maxAge 15000 means 15 sec(browser ma kya sudhi save reshe e mate)
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"s2.html"}))
app.post("/savesession",(req,res)=>{
    req.session.uname=req.body.uname;
    req.session.pass=req.body.pass;
    res.redirect("fetchsession")
    //ahi req.session ma uname jagya e biju name api shakay pn bhul na thay e mate same name rakhyu che
})
app.get("/fetchsession",(req,res)=>{
    res.send(`<h1>welcome ${req.session.uname}</h1>
    <a href="/deletesession">logout</a>`)
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.clearCookie("login")
    res.send(`login
    <a href="/">login</a>`)
   
})
/*app.get("/deletesession",(req,res)=>{
    req.session.destroy((e)=>{
        if(e){res.send(e)}
        else{
            res.clearCookie("login")
            res.send("destroyed")
        }
    });
 
})*/ //method 2 to clear cookie
app.listen(8202)