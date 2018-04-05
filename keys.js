//will let the user know their call has been loaded
console.log("this is loaded man!");

exports.twitterKeys = {
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  };
  
  exports.spotifyKeys = {
	id: process.env.SPOTIFY_ID,
	secret: process.env.SPOTIFY_SECRET
	};
	
