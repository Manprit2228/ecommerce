const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email:String,
    phone:String,
    address: String,
    password: String,
    username:String,
})

mongoose.model("users", userSchema);
