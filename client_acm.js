var Twit = require('twit');  // Linking twitter handle
const express = require('express');
const app = express();
const server = require('http').Server(app); // Importing modules. 
var io = require('socket.io')(server);  // Including module socket.io.
var fs = require('fs');  


var T = new Twit({
    // Get the API keys from the developer.twitter.com 
    consumer_key: '505LeLAjIRWU0WkXLr373xPy4',
    consumer_secret: 'DfAcXmT6S7nFk3NpecXJgdW3P07a94nAyQG0eLfXD5TqqLz3Nv',
    access_token: '1432237063743557636-XXvw6HGr2WrVVEDVNlmojdVAzr97kC',
    access_token_secret: 'n5GcLzCOhacYe2xPuIrkp8dda3GDSMaKnf9sdigNzKfYN',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

function responseCallback(err, data, response) {

    console.log(err);   

}

//This stream tracks the specific hashtag or, it can be customised as well
var stream = T.stream('statuses/filter', { track: '#acmiem' })

stream.on('tweet', function (tweet) {
    console.log(tweet.id)   //Console logging module.

    //Bot Retweets the Tweet
    T.post('statuses/retweet/:id', { id: tweet.id_str }, responseCallback); //Bot creation function

    //Bot Likes the Tweet
    T.post('favorites/create', { id: tweet.id_str }, responseCallback); //Bot creation function

})


