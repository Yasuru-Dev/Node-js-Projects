const express = require("express");
const app = express();
app.use(express.json());
let users = ["dhanu","alex"];
app.get("/users",(req,res)=>{
    res.json(users);
});

//post
app.post("/users",(req,res)=>{
    const newuser = req.body.name;
    users.push(newuser);
    res.send("used added");
});s

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

