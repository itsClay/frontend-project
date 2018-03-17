const Twitter = require('twitter');
const secrets = require('../../src/secret_keys')

const error = (err, resp, body) => {
  console.log('ERROR: [%s] =>', err)
}
const success = (data) => {
  console.log('DATA: [%s] =>', data)
}

// configure twitter object
let twitter = new Twitter({
  consumer_key: secrets.CONSUMER_KEY,
  consumer_secret: secrets.CONSUMER_SECRET,
  access_token_key: secrets.ACCESS_TOKEN,
  access_token_secret: secrets.ACCESS_TOKEN_SECRET
});
// configure a default set of params
const params = {screen_name: 'Trizic', count: 30} // default setup

module.exports = function(app, db) {
  app.get('/user_timeline/:screen_name', (req, res) => {
    params.screen_name = req.params.screen_name // overwrite screen name, we don't need to touch count
    twitter.get('statuses/user_timeline', params, function(err, tweets, resp) {
      if (!err) {
        console.log(tweets)
        res.send(tweets)
      } else {
        console.log('ERROR: ', err)
        res.send(err)
      }
    })
  })

}