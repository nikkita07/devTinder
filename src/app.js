const express = require("express");
const connectDB = require("./config/database");
const app = express();
const  User= require("./models/user")

app.use(express.json());
app.post("/signup",async (req,res)=>{
    const user = new User({
firstName : "guru",
lastName : "singh",
password:"gurpreet1234"
    });

  await user.save();
  res.send("new user added!!")

});



connectDB()
.then(()=>{
    console.log("DB estd successfully!");
    app.listen(7777,()=>{
        console.log("server is running successsfully at port 7777")
    });
})
.catch((err)=>{
    
    console.error("DB cannot be connected!!")
})

