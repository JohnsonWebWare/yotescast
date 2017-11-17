const express = require('express');
const app = express();

app.get('/rss', require('./routes/rss'));

exports = module.exports = app;