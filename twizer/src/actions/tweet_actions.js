import * as APIUtil from '../utils/tweets_api_utils'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
})

export const fetchTweets = () => dispatch => {
  return APIUtil.fetchTweets().then(
    tweets => dispatch(receiveTweets(tweets)),
    errors => dispatch(receiveTweetErrors(errors.responseJSON))
  )
}