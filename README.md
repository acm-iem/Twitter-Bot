
# Twitter Bot








What it meants to do?



Twitter bot is an automated user account that interacts with Twitter using an application programming interface (API). This bot is programmed to perform tasks normally associated with human interaction such as

- like tweets,
- and, most importantly, they can tweet content, and retweet anything posted by a specific set of users or featuring a specific hashtag. (here, #acmiem and also #csiiem)

It is also programmed to produce automated posts, follow Twitter users or serve as spam to entice clicks on the Twitter microblogging service.
## Requirements

- Python 3
- Tweepy

  
## Procedure:

We need to get the following credentials/API keys from the developer.twitter.com  :👇



```bash
consumer_key = 'consumer key'
consumer_secret = 'consumer secrets'
access_key = 'access token'
access_secret = 'access token secret'


```

## Dependencies:
Before running it in your system, make sure you install ⬇ all the dependencies below:


 ```bash
npm install twit

npm install socket.io



``` 

The twitter real-time stream tracks the the specific hashtag (which Can be customised as well) and the Bot Likes and Retweets the Tweet.🔁


## Detecting Bots on Twitter Using Machine Learning
In this project, we will use Machine Learning techniques to predict weather an account on Twitter is a Bot or a real user. We have performed significant amount of feature engineering, along with feature extraction - selected features out of 20 helped us to identify whether an account is bot or non bot. We implemented various algorithm but finally implemented our own which gave us AUC>95%.

## Requirements

- Python 3
- Pandas
- Numpy
- SeaBorn
- MatplotLib
- Sklearn

The code and datasets can be found under 'Final Project and Code' folder.



## Steps followed

💻 First the data has been collected using Twitter API 

💻 Analyzed important features (Pre-processing)
 
📎Followers vs Following Count

📎Frequecy of appearance of Bots vs NonBots in ScreenName

💻 Used Decision Tree Classifier




  
## Contributing

Contributions are always welcome!

🌸🌸HactoberFest 2021🌸🌸

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## Reference

https://www.youtube.com/embed/bRjxeovhL50?ecver=2
  