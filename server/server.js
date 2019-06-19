// require('newrelic');
const express = require('express');
const path = require('path');
//const proxy = require('http-proxy-middleware');
//const bodyParser = require('body-parser');

const app = express();
const port = 3070;
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     console.log('here')
//     res.send('hello');
// })

//app.use(express.static(path.join(__dirname, '../client/public')));

// app.use('/stocks/:id', proxy('http://localhost:3001/stocks/:id'))


app.listen(() => console.log('listening on: ', port))
