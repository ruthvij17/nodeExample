const http =require("http");

const port=8081;

http
.createServer((req,res)=>{
    res.writeHead(200,{"content-type": "text/html"});
    res.write(`<h2>Hey server started running on a port ${port}:-)</h2>`);
    res.end();
})
.listen(port,()=>{
    console.log(`Node js server started running on port ${port}`);
})
