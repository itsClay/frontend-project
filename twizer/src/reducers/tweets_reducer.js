import { RECEIVE_TWEETS } from '../actions/tweet_actions'
import { merge } from 'lodash'

const TweetsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TWEETS:
      const newTweets = {}
      action.tweets.forEach(tweet => {
        newTweets[tweet.id] = tweet
      })
      return merge({}, state, newTweets)
      // return Object.assign({}, state, action.tweets)

      default:
        return state;
  }
}

export default TweetsReducer;