import * as APIUtil from '../utils/tweets_api_utils'
// import { fetchTweets } from '../utils/tweets_api_utils';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_TWEET_ERRORS = 'RECEIVE_TWEET_ERRORS'

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
})

const receiveTweetErrors = errors => ({
  type: RECEIVE_TWEET_ERRORS,
  errors
})

export const fetchTweets = (screen_name) => dispatch => {
  return APIUtil.fetchTweets(screen_name).then(
    tweets => dispatch(receiveTweets(tweets.data)),
    errors => dispatch(receiveTweetErrors(errors.responseJSON))
  );
}
