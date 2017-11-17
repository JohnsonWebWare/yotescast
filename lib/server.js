const express = require('express');
const app = express();

app.use('/rss', require('./routes/rss'));
app.get('/', (req, res) => res.send('Hello World'));

exports = module.exports = app;