var http=require("http")
http.createServer((req,res)=>{
    //res.writeHead(200,{"content-type":"text/html"})//text/plain lakhshu to <h2>welcome to my website</h2>akhu amnam avshe
    res.write("hello")
    res.write("<h1>welcome to my website</h1>");
    res.end()
  
    
}).listen(7002,()=>{console.log("server started")})
//h1 ma hashe ne head nahi lakhyu hoi to b h1 ma ans acvshe but
//h2 ma lakhyu hashe ne head nahi lakhyu hoi to plain text tarike avshe
//text/plain ma plain text tarike
//res.end ma lakhie to b thai jashe
//head nahi hoi tyare sauthi pela plain