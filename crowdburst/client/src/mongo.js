var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://shambhavir:s8uxeaQZcw@S-Px@cluster0.xrzxq.mongodb.net/<dbname>?retryWrites=true&w=majority';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("Users", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
});