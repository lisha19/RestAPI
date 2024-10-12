const http = require("https");

const fs= require("fs");
const myServer = http.createServer((req,res)=>{
// console.log("New Req");
const log= `${Date.now()}:New Req Received\n`;
fs.appendFile("logo.txt",log ,(err,data)=>{
    res.end("hello0");
});

});

myServer.listen(8000,()=>console.log("server started"));
