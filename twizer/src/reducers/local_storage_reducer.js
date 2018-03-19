import { RECEIVE_STORAGE, SET_STORAGE } from '../actions/local_storage_actions'
import { merge } from 'lodash'

const LocalStorageReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STORAGE:
      // return action.settings
      return merge({}, state, action.settings)
    // return Object.assign({}, state, action.tweets)
    case SET_STORAGE:
      return merge({}, state, action.settings)
    default:
      return state;
  }
}

export default LocalStorageReducer;