import * as APIUtil from '../utils/local_storage_settings'

export const RECEIVE_STORAGE = 'RECEIVE_STORAGE';
export const SET_STORAGE = 'SET_STORAGE'

const receiveStorage = settings => ({
  type: RECEIVE_STORAGE,
  settings
})

// const setStorage = settings => ({
//   type: SET_STORAGE,
//   settings
// })

export const fetchStorage = () => dispatch => {
  let settings = APIUtil.fetchSettings()
  return ((settings) => dispatch(receiveStorage(settings)))(settings)
}

export const setupStorage = (settings) => dispatch => {
  APIUtil.setSettings(settings)
  return ((settings) => dispatch(receiveStorage(settings)))(settings)
}
