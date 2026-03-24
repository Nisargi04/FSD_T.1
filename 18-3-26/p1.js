var p=require("path");
var addr="D:/LJU/node/my.html";
var bn=p.basename(addr);
var dn=p.dirname(addr);
var en=p.extname(addr);
console.log(`basename is ${bn},directory is ${dn} extension is ${en}`);
var ps=p.parse(addr)
console.log(ps)