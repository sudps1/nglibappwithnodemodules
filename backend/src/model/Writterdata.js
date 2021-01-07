const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AngularLibApp');
const Schema = mongoose.Schema;

const NewWritterSchema = new Schema({
    authorname : String,
    genre : String,
    book1 : String,
    book2 : String, 
    book3 : String,
    imageUrl : String
});

var Writterdata = mongoose.model('writterdata', NewWritterSchema);                       
module.exports = Writterdata;