var fs=require("fs");
fs.writeFileSync("b6.txt","welcome students!");
/*//fs.mkdirSync("myfolder");
//fs.rmdirSync("myfolder");
var r=fs.readFileSync("b6.txt");
console.log(r.toString())*/
fs.appendFileSync("b6.txt","\n Node Js File System");//add text-append
var r1=fs.readFileSync("b6.txt","utf-8")//buffuer to human understanding language ma convert karva
console.log(r1)
fs.unlinkSync("b6.txt");// b6 file delete thai jashe
console.log("completed")