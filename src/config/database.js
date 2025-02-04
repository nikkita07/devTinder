const mongoose = require('mongoose');
//mongoose.connect() => returns a promise so use async await

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://NikitaNodeJS:UfBvqzLujRqW6GZ@nodecluster.5qzth.mongodb.net/?retryWrites=true&w=majority&appName=NodeCluster/devTinder");
     
    } catch (err) {
      console.log('Error:', err);
    }
  }

module.exports = connectDB;