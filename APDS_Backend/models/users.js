const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{type: String, required: true},
    surname:{type: String , required: true},
    emailAddress:{type: String , required:true},
    username:{type: String, required: true},
    password:{type: String, required: true}
});

// Create a model based on the schema
const User = mongoose.model('users', userschema);

// Export the model
module.exports = User;