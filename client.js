var Twit = require('twit');
const express = require('express');
const app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


var T = new Twit({
    consumer_key: 'BeIUIbrOlWxO8qmG9zckRqYJq',
    consumer_secret: 'CFMfcudyNiFSqmrW6mbhDe63cYxKFfBNglmUi0rS8cRnenjmaQ',
    access_token: 'CFMfcudyNiFSqmrW6mbhDe63cYxKFfBNglmUi0rS8cRnenjmaQ',
    access_token_secret: 'CAD81dqaZtWcwuBiEXpe9QfSUbCyP2nfUULIWAZdMRsIH',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

function responseCallback(err, data, response) {

    console.log(err);

}

var stream = T.stream('statuses/filter', { track: '#acmiem' })

stream.on('tweet', function (tweet) {
    console.log(tweet.id)
    T.post('statuses/retweet/:id', { id: tweet.id_str }, responseCallback);
    T.post('favorites/create', { id: tweet.id_str }, responseCallback);

})


