const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())

//connect to MONGODB
mongoose.connect("mongodb://localhost:27017/userapi")
.then(() => {
    console.log("Mongo DB Connected");
})
.catch((err) =>{
    console.log("Error connecting to MongoDB:", err);
});

//USER SCHEMA

const userSchema = new mongoose.Schema({
    name : String,
    age:Number
});

//M
const User = mongoose.model ("User", userSchema);

//get users
app.get("/users",async(req,res) =>{
    const users = await User.find();
    res.json(users);
});

//Create users

app.post("/users",async(req,res) =>{
    const newUser = new User({
        name: req.body.name,
        age: req.body.age
    });

    await newUser.save();
    res.send("User saved to MongoDB");

});

// SERVER PORT
const PORT = 3000;

// START SERVER
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});



