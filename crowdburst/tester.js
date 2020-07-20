const express = require('express');
const path = require('path')
const app = express();

app.get('/hey', (req, res) => res.send('ho!'))

// app.get('/ping', (req, res) => {
//     return res.send('pong')
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(8080)