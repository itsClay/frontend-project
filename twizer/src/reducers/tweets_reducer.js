import { RECEIVE_TWEETS } from '../actions/tweet_actions'

const TweetsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TWEETS:
      return Object.assign({}, state, action.tweets)
      // return Object.assign({}, state, action.tweets)
      default:
        return state;
  }
}

export default TweetsReducer;