const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const { getRecent, getDepartment } = require('./controller/plu.js');

const app = express();

const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/recent', getRecent);

app.get('/api/department/:category', getDepartment);

app.listen(port, () => console.log(`Listen on port: ${port}!`));
