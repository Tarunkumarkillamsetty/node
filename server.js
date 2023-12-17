const http = require("http");

const port = 8081;

http.createServer((req , res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h3>My name is TarunkumarKillamsetty add on data testing nodemon</h3>");
    res.end();
})
.listen(port,()=>{
    console.log(`Nodejs server started Running on port ${port}`);
})

// http://localhost:8081