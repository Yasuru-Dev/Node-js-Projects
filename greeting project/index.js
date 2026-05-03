const express = require("express");
const app =express();
//home
app.get("/",(req,res)=>{
    res.send("test working");
});
//about
app.get("/about",(req,res)=>{
    res.send("this is about page");
});
//contact
app.get("/contact",(req,res)=>{
    res.send("contact us on 1234567890");
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});