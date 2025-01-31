const express = require("express");
const app = express();

 

app.use('/user', (req, res, next) => {
    console.log('1st response');
    next() // pass control to the next handler 
  } ,
  [(req,res,next)=>{
    console.log('2nd response');
    next();
  },
  (req,res,next)=>{
    console.log('3rd response');
    res.send("the 3rd response from server");
    next();
  }]) 
  

app.listen(7777,()=>{
    console.log("server is running successsfully at port 7777")
});
