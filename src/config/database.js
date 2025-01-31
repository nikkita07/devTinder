const mongoose = require('mongoose');
//mongoose.connect() => returns a promise so use async await

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://nikkitasingh64:FSiZoKelcKU3sU57@namastenode.5qzth.mongodb.net/");
      console.log('Connected to MongoDB');
    } catch (err) {
      console.log('Error:', err);
    }
  }
  
  

module.exports = connectDB;