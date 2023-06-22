const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
    //fields
    username: {
        type: String, //type of data for field  
        required: true, //required field 
        unique: true, //unique field 
        trim: true, //trim whitespace
        minlength: 3 //minimum length
    },
},
{
    timestamps: true, //automatically create fields for when it was created and modified
});

//create model using schema 
const User = mongoose.model('User', userSchema);

//export model so it can be used in other files
module.exports = User;