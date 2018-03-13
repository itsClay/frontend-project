import { combineReducers } from 'redux';

import TweetsReducer from './tweets_reducer'
import TweetsErrorsReducer from './tweets_errors_reducer'

const rootReducer = combineReducers({
  tweets: TweetsReducer,
  tweetsErrors: TweetsErrorsReducer
})

export default rootReducer;