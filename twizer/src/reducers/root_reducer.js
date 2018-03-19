import { combineReducers } from 'redux';

import TweetsReducer from './tweets_reducer'
import TweetsErrorsReducer from './tweets_errors_reducer'
import LocalStorageReducer from './local_storage_reducer'

const rootReducer = combineReducers({
  tweets: TweetsReducer,
  tweetsErrors: TweetsErrorsReducer,
  settings: LocalStorageReducer
})

export default rootReducer;