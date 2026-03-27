var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})//text/plain lakhshu to <h2>welcome to my website</h2>akhu amnam avshe
    res.write("<h2>welcome to my website</h2>");
    res.end()
}).listen(7001,()=>{console.log("server started")})