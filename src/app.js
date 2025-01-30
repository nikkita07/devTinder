const express = require("express");
const app = express();

//request handler

app.get("/user",(req,res)=>{
    res.send({firstName:"nikita"})
})

app.post("/user",(req,res)=>{
    res.send("data sent successfully!")
})





//overides everything because starts with "/"
// app.use("/",(req,res)=>{
//     res.send("hello");
//   })

// app.use("/test",(req,res)=>{
//   res.send("hello");
// })


app.listen(7777,()=>{
    console.log("server is running successsfully at port 7777")
});
