# devTinder
=> ALL HTTP METHODS
GET: get data from the server
POST: want to send and mutate some data in the server
PUT: updating data in the server
PATCH: for changing the existing data in the server
DELETE:


# ROUTING
The routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback.

const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(7777,()=>{
    console.log("server running !!");
})
 

# multiple routing handler
app.use('/user', (req, res, next) => {
  console.log('1st response');
  next() // pass control to the next handler 
} ,
(req,res)=>{
  console.log('2nd response');
}) 




# This will throw an error as  cannot set header after they're sent to the client

// the 1st response already sent a request to the client and doing it again will cause an error
 

app.use('/user', (req, res, next) => {
  console.log('1st response');
  res.send("the first response from server");
  next() // pass control to the next handler 
} ,
(req,res)=>{
  console.log('2nd response');
}) 

# difference between app.use() and app.all()














# Based on string patterns

This route path will match acd and abcd.
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})

This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})

This route path will match /abe and /abcde.
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})
