require('dotenv').config('../.env');
const express = require('express');
const { notFoundHandler, errorHandler } = require('./error');
const myDB = require('../db/db');

myDB.create('user 1', 10);
myDB.create('user 2', 10);
myDB.bulkCreate('user 6', 10, 2);

const tickets = myDB.find();
console.log('All tickets', tickets);
const winners = myDB.draw(2);
console.log('Winners', winners);

const app = express();

app.use(require('./middleware'));
app.use(require('./routes'));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;