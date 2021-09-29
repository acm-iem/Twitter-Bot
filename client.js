var Twit = require('twit');
const express = require('express');
const app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


var T = new Twit({
    consumer_key: 'rSalP3Awoptck0vJQEKoLiSwK',
    consumer_secret: 'AbODv1nWQltzHGm8epLhOewli2DFUAhIdfPGNhh3TETcsVupcy',
    access_token: '1332332221361840128-UDoWZDmS0BbTDCe1RjVpEFchGKtTRB',
    access_token_secret: '6yNyJpnRdEyHVUdywrIbMLlFDIERplq3SnZAj4KZ7eOd1',
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


