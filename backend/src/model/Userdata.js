const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AngularLibApp');
const Schema = mongoose.Schema;

const NewUserSchema = new Schema({
    firstname : String,
    lastnane : String,
    username : String,
    email : String, 
    mobno : String,
    password : String
});

var Userdata = mongoose.model('userdata', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;