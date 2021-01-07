const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AngularLibApp');
const Schema = mongoose.Schema;

const NewBookSchema = new Schema({
    title : String,
    genre : String,
    author : String,
    description : String,   
    imageUrl : String
});

var Bookdata = mongoose.model('bookdata', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;