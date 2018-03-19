import React from 'react';
import App from '../App'
import { Provider } from 'react-redux';

let settings = JSON.parse(window.localStorage.getItem('settings'))
if(settings.theme === 'nightMode') {
  //...
  require('./night_mode.css')
}
// this is a little overkill here until we try to set up routes
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root;