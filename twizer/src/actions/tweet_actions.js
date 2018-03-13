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

export const fetchTweets = (tweets) => dispatch => {
  return APIUtil.fetchTweets(tweets).then(
    tweets => dispatch(receiveTweets(tweets)),
    errors => dispatch(receiveTweetErrors(errors.responseJSON))
  );
}
