const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const { getPlu } = require('./controller/plu.js');

const app = express();

const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/plu', getPlu);

app.listen(port, () => console.log(`Listen on port: ${port}!`));
