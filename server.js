const express = require("express");
const users = require("./data.js")
const getemail = require("./getemails.js")
const app = express();

//console.log(users);




//get user by index
app.get("/getuser", function(req, res){
    const index = req.query.index;
   const oneUser = users[index]
   res.send(oneUser);
});
//get user email
app.get("/getemail", function(req, res){
    const name = req.query.name;
    const email = getemail(users, name);
   res.send(email);
});


app.get("/greet", function(req, res){
    const userName = req.query.user;
   res.send("Hello " + userName + "!");
});

app.get("/goodbye", function(req, res){
    const userName = req.query.user;
   res.send("Goodbye " + userName + "!");
});

app.get("/weather", function(req, res){
    const userName = req.query.user;
   res.send("How is the weather " + userName + "?");
});



const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Server listening on ${port}`));