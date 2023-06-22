const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema 
const ecerciseSchema = new Schema({

    //field useranme
    username: {
        type: String,
        required: true,
    },
    //field description
    description: {
        type: String,
        required: true,
    },
    //field duration
    duration: {
        type: Number,
        required: true,
    },
    //field date
    date: {
        type: Date,
        required: true,
    }
},
{
    //automatically create fields for when it was created and modified
    timestamps: true,

});

const Ecersice = mongoose.model('Ecersice', ecerciseSchema);

module.exports = Ecersice;