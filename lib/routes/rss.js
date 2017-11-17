const RSS = require('rss');
const feedOptions = {
    title: 'Yotescast',
    description: 'Weekly podcast covering the Arizona Coyotes and other local hockey teams',
    generator: 'Express / RSS',
    feed_url: 'https://yotescast.com/rss',
    img_url: 'https://yotescast.com/img/logo.jpg',
    webMaster: 'Alex Johnson <alex@johnsonwebware.com>',
    copyright: 'Yotescast 2016-2017',
    language: 'English',
    ttl: 1440
};

var feed = new RSS(feedOptions);