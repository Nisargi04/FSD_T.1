var express=require("express");
var router=express.Router();
var obj=[{name:"a",age:18,city:"ahemdabad",branch:"cse",id:1},
{name:"i",age:42,city:"ahemdabad",branch:"cst",id:2},
{name:"b",age:27,city:"rajkot",branch:"cseit",id:3},
{name:"c",age:20,city:"gandhinagar",branch:"cs",id:4},
{name:"k",age:19,city:"dhari",branch:"cse",id:5},
{name:"n",age:18,city:"bhavnagar",branch:"cse",id:6}
]
router.get("/",(req,res)=>{
    res.type("text/html");
    for(o of obj){
        res.write(`<h1>name:${o.name},age:${o.age}branch:${o.branch}city:${o.city}</h1>`)
    }
    res.send()

})
router.get("/id/:id",(req,res)=>{
    var data=obj.filter(o=>o.id==req.params.id)
    if(data.length>0)
    {
        res.send(data)
    }
    else{
        res.send("not data available")
    }
})
router.get("/branch/:branch",(req,res)=>{
    var data=obj.filter(o=>o.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0)
    {
        res.send(data)
    }
    else{
        res.send("not data available")
    }
})
module.exports=router

