var fs=require("fs");
//fs.mkdirSync("task")
fs.writeFileSync("task/t1.txt","t1 is here! jkmbmjb")
fs.appendFileSync("task/t1.txt","start preparing for exam")
var r=fs.readFileSync("task/t1.txt","utf-8")
fs.writeFileSync("task/t2.txt",r)
var r=fs.readFileSync("task/t2.txt","utf-8")
fs.copyFileSync("task/t1.txt","task/t3.txt")
fs.renameSync("task/t3.txt","task/new.txt")
