const express = require('express')
const users = require("./MOCK_DATA.json");
const app = express()
// frontend can render it accordingly it is a raw data
const PORT = 3000;
app.get("/api/users",(req,res)=>{
return res.json(users);
});
app.get("/api/users/:id",(req,res)=>{
    // return res.json(users);
    const id= Number(req.params.id);
    const user = users.find((user)=>user.id==id);
return response.json(user);
    });
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})