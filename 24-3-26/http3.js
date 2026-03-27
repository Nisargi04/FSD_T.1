var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    var d={"subject":"fsd2","faculty":"nas"}
    res.end(JSON.stringify(d));
}).listen(8001,()=>{console.log("server started on http://localhost:8001");})
