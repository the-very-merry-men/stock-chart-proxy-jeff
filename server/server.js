// require('newrelic');
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const app = express();
const port = 3050;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/stocks/', proxy('http://ec2-13-58-156-101.us-east-2.compute.amazonaws.com:3001/stocks/'));
app.use('/api/stocks/', proxy('http://ec2-18-222-193-177.us-east-2.compute.amazonaws.com:3111/api/stocks/'));


app.listen(port, () => console.log('listening on: ', port))
