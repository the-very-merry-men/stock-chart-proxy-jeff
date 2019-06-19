// require('newrelic');
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const app = express();
const port = 3050;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

// jeff
app.use('/stocks/', proxy('http://ec2-13-58-156-101.us-east-2.compute.amazonaws.com:3001/stocks/'));

// marbo
// app.use('/api/stocks/', proxy('http://ec2-18-222-193-177.us-east-2.compute.amazonaws.com:3111/api/stocks/'));

// // matt
// app.use('/api/users/', proxy('http://ec2-18-220-13-243.us-east-2.compute.amazonaws.com:3420/api/users/'));
// app.use('/api/stocks/price', proxy('http://ec2-18-220-13-243.us-east-2.compute.amazonaws.com:3420/api/stocks/price'));
// app.use('/api/stocks/', proxy('http://ec2-18-220-13-243.us-east-2.compute.amazonaws.com:3420/api/stocks/'));
// app.use('/stocks/', proxy('http://ec2-18-220-13-243.us-east-2.compute.amazonaws.com:3420/stocks/'));



app.listen(port, () => console.log('listening on: ', port))
