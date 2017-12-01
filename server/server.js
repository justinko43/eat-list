'use strict';

const express = require('express');
const app = express();
// const controller = require('./controller');

app.use(express.static(__dirname +'./../')); //serves the index.html






app.listen(3000); //listens on port 3000 -> http://localhost:3000/
