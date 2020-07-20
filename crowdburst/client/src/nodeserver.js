const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var MongoClient = require('mongodb').MongoClient;

const dbConfig = 'mongodb+srv://shambhavir:<password>@cluster0.xrzxq.mongodb.net/<dbname>?retryWrites=true&w=majority'; 


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {urlNewUrlParser: true});

var nameSchema = new mongoose.Schema ({
  avenger: String,
  weapon: String,
});
var weapons = mongoose.model("weapons,", nameSchema); 

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
}); 

app.post('/insert', function(req,res){
	console.log(req.body)
  var myData = new weapons(req.body);
      myData.save()
          .then(item => {
              res.send("Name saved to database");
          })
          .catch(err => {
              res.status(400).send("Unable to save to database");
          });
})

app.get('/showall', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
    	useNewUrlParser: true
    if (err) throw err;
    var dbo = db.db("stores");
    dbo.collection("reviews").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });

})

app.post('/delete', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stores");
  var myquery = { title: req.body.title };
  dbo.collection("reviews").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    res.send("1 document deleted");
    db.close();
  });
});
})

app.get('/titles', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
    	useNewUrlParser: true
    if (err) throw err;
    var dbo = db.db("stores");
    var mysort = { title: -1 };
    dbo.collection("reviews").find({},{ projection: { _id: 0, title: 1} }).sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
})


app.post('/updatecontent', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stores");
  var myquery = { title: req.body.title };
  var newvalues = { $set: {tile: req.body.title,content: req.body.content} };
  dbo.collection("reviews").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    res.send("1 document updated with title: "+req.body.title);
    db.close();
  });
});
})

app.post('/updatetitle', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stores");
  var myquery = { title: req.body.title };
  var newvalues = { $set: {title: req.body.newtitle} };
  dbo.collection("reviews").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    res.send("1 document updated with title: "+req.body.title);
    db.close();
  });
});

})

app.get('/', (req, res) => {
  res.json({"message": "Welcome to Easyweapons application."});
});

// listen for requests
app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});