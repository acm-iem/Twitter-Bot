var Twit = require('twit');
const express = require('express');
const app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


var T = new Twit({
    // Get the API keys from the developer.twitter.com 
    consumer_key: '3ByKuUk0qniErJW2XePVmY0cL',
    consumer_secret: 'cxyVffTFCTFCYZ7JJMmzHwCwIx7DMRtvutLYwlkrMgkgTXlA6u',
    access_token: '1433328403944333320-39GoYBCNOMd9IsfJr7Ci8ihvS0jEbb',
    access_token_secret: 'Vl93pLrwxFFIFyCqNj9eN06Vgly9q6PXSaxJ7NCnZbTOp',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

function responseCallback(err, data, response) {

    console.log(err);

}

//This stream tracks the specific hashtag or, it can be customised as well
var stream = T.stream('statuses/filter', { track: '#csiiem' })

stream.on('tweet', function (tweet) {
    console.log(tweet.id)

    //Bot Retweets the Tweet
    T.post('statuses/retweet/:id', { id: tweet.id_str }, responseCallback);

    //Bot Likes the Tweet
    T.post('favorites/create', { id: tweet.id_str }, responseCallback);

})


