const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

//get users
app.get("/users",(req,res)=>{
 const data = fs.readFileSync("users.json");
 const users=JSON.parse(data);
 res.json(users);   
});

//post users
app.post("/users",(req,res)=>{
    const data = fs.readFileSync("users.json");
    const users=JSON.parse(data);
    const newuser=req.body.name;
    users.push(newuser);

    fs.writeFileSync("users.json",JSON.stringify(users,null,2));
    res.send("User added");



});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})