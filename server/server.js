require('dotenv').config();

const express = require('express');
var app = express();

const bodyParser = require('body-parser');
var cors = require('cors')

const plan = require('./routes/plan');

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

//Plans route
app.use('/', plan);

const hostname = '127.0.0.1';
const port = 5000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});