var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`<h1>my home page</h1><img src="1.png" width="300" height=""300>`)
    }
    else if(req.url==="/1.png"){
        var i=fs.readFileSync("1.png")
        res.writeHead(200,{"content-type":"image/png"})
        res.end(i)
    }
    else if(req.url==="/about")
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write(req.url)
        res.end("<h1>About page</h1>")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h3>page not found</h3>")
    }
}).listen(8002)