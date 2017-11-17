const express = require('express');
const router = express.Router();
const RSS = require('rss');
const config = require('config');

const episodes = [];

episodes.push({
    title: 'Yotescast 2:2',
    description: 'Yotescast Season 2, Episode 2',
    url: 'https://yotescast.com/episodes/2/2',
    guid: 'e8640e20-cb6b-11e7-9c5c-51fa415a22f7',
    date: new Date(2017, 10, 15),
    enclosure: {
        url: 'https://audio.yotescast.com/2017-2018/yotescast-2017-11-15.mp3',
        size: 15462018,
        type: 'audio/mp3'
    }
});

episodes.push({
    title: 'Yotescast 2:1',
    description: 'Yotescast Season 2, Episode 1',
    url: 'https://yotescast.com/episodes/2/1',
    guid: '252f53c0-cb6a-11e7-868e-aba3c16730ab',
    date: new Date(2017, 9, 25),
    enclosure: {
        url: 'https://audio.yotescast.com/2017-2018/yotescast-2017-10-25.mp3',
        size: 17689655,
        type: 'audio/mp3'
    }
});

var feed = new RSS(config.get('rss.feed-options'));

for (let episode of episodes) {
    feed.item(episode);
}

const xml = feed.xml({ indent: true });

router.get('/', (req, res) => {
    res.set('Context-Type', 'text/xml');
    res.send(xml);
});

exports = module.exports = router;