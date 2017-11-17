const RSS = require('rss');
const config = require('config');

var feed = new RSS(config.get('rss.feed-options'));