const express = require("express");
const connectDB = require("./config/database");
const app = express();

 

connectDB()
.then(()=>{
    console.log("DB estd successfully!");
})
.catch((err)=>{
    
    console.error("DB cannot be connected!!")
})
app.listen(7777,()=>{
    console.log("server is running successsfully at port 7777")
});
