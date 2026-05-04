const express = require("express");
const app = express();

app.use(express.json()); // important for POST

let users = ["Dhanu", "Alex"];

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});


// POST new user
app.post("/users", (req, res) => {
    const newUser = req.body.name;
    users.push(newUser);
    res.send("User added!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});