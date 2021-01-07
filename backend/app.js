const express = require('express');
const BookData = require('./src/model/Bookdata');
const Userdata = require('./src/model/Userdata');
const Writterdata = require('./src/model/Writterdata')

const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='12345678';




function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
  
  app.get('/authors',function(req,res){
    
    Writterdata.find()
                  .then(function(authors){
                      res.send(authors);
                  });
  });
  
app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {       
      title : req.body.book.title,
      genre : req.body.book.genre,
      author : req.body.book.author,
      description : req.body.book.description,
      imageUrl : req.body.book.imageUrl,
   }       
   var book = new BookData(book);
   book.save();
});

app.get('/books',function(req,res){
    
  BookData.find()
                .then(function(books){
                    res.send(books);
                });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
  BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      title= req.body.title,
      genre = req.body.genre,
      author = req.body.author,
      description = req.body.description,      
      imageUrl = req.body.imageUrl
      BookData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "title":title,
                                  "genre":genre,
                                  "author":author,
                                  "description":description,                                  
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
   app.get('/seven/:id',  (req, res) => {
  
    const id = req.params.id;
    Writterdata.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })
   app.put('/renew',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    authorname= req.body.authorname,
    genre = req.body.genre,
    book1 = req.body.book1,
    book2 = req.body.book2,
    book3 = req.body.book3,
    imageUrl = req.body.imageUrl
    Writterdata.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "authorname":authorname,
                                "genre":genre,
                                "book1":book1,
                                "book2":book2,
                                "book3":book3,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
   app.delete('/delete/:id',(req,res)=>{
   
    id = req.params.id;
    Writterdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     BookData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
  
     
   app.post('/userdetails',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var user = {       
      firstname : req.body.user.firstname,
      lastnane : req.body.user.lastnane,
      username : req.body.user.username,
      email : req.body.user.email,
      mobno : req.body.user.mobno,
      password : req.body.user.password

   }       
   var user = new Userdata(user);
   user.save();
});

app.post('/writter',verifyToken,function(req,res){
   
  console.log(req.body);
 
  var writter = {       
    authorname : req.body.writter.authorname,
    genre : req.body.writter.genre,
    book1 : req.body.writter.book1,
    book2 : req.body.writter.book2,
    book3 : req.body.writter.book3,    
    imageUrl : req.body.writter.imageUrl
 }       
 var writter = new Writterdata(writter);
 writter.save();
});



app.listen(3000, function(){
    console.log('listening to port 3000');
});

