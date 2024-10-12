const fs = require("fs");
// fs.writeFileSync("./test.txt", "hello");
// fs.writeFile("./test.txt" , "hello",(err)=>{});

const result= fs.readFileSync("./contact.txt" , "utf-8");
console.log(result);