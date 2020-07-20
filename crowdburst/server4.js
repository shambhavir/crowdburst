const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = reqiure('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


const app = express();
const port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect('mongodb+srv://shambhavir:s8uxeaQZcw@S-Px@cluster0.xrzxq.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true})

.then(client => {
  console.log('Connected to databse')
    const db = client.db('test')
  
    const quotesCollection = db.collection('test2')

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello' });

    db.collection('test2').find().toArray()
        .then(test2 => {
        //    res.render({test2: test2})
            //console.log(results)
            console.log(res.render({test2: test2}))
        })

        .catch(error => console.error(error))

  });
  
  app.post('/api/world', (req, res) => {
    // console.log(req.body);
    // res.send(
    //   `I received your POST request. This is what you sent me: ${req.body.post}`,
    // );

    quotesCollection.insertOne(req.body)
    .then(result => {
        res.redirect('/')
    })
.catch(error => console.error(error))
  });
  
  app.listen(port, () => console.log(`Listening on port ${port}`));
})
