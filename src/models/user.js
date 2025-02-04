const mongoose = require("mongoose");
const {Schema} = mongoose.mongoose;
const UserSchema = new Schema({
      firtstName : String,
      LastName:{
        type : String
      },
      password:String,
      age:Number,
      gender:String
})

const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;