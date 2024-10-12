const http = require("https");

const fs= require("fs");
const express = require("express")
const app = express();
app.get("/",(req,res)=>{
return res.send("heloo from home page");
});

app.get("/about",(req,res)=>{
    return res.send("heloo from about page");
    });

    const myServer= http.createServer(app);
    
myServer.listen(8000,()=>console.log("server started"));
