var p=require("path")
var fs=require("fs")
var ps="lj/sample.txt"
var bn=p.basename(ps)
var dn=p.dirname(ps)
var en=p.extname(ps)
var newp=dn+"/"+bn
console.log(newp)
//fs.mkdir(dn,(e)=>{if(e){throw e}else{console.log("folder created")}})
fs.writeFile(newp,"hello",(e)=>{if(e){throw e}else{fs.copyFile(newp, dn+"/sample1.txt",(e)=>{if(e){throw e}else{
    fs.unlink(newp,(e)=>{if(e){throw e}else{console.log("task completed")}
    console.log("task completed") })
}})}})

