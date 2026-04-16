var express=require("express")
var app=express()
app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
    number 1<input type="number" name="n1"></input>
    number 2<input type="number" name="n2"></input>
    <select name="operation">
    <option value="add">Addition</option>
    <option value="sub">Subtraction</option></select>
    <input type="submit" value="calc"></input></form>`)
})
app.post("/data",(req,res)=>
{
    var n1=parseInt(req.body.n1)
    var n2=parseInt(req.body.n2)

    if(req.body.operation=="add")
    {
        var result=n1+n2
    }
    else
    {
        var result=n1-n2
    }
    res.send(`number 1 is ${req.body.n1} number 2 is ${req.body.n2}
    the result is ${result}`)
})
app.listen(8008)