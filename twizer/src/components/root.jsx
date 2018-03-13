import React from 'react';
import App from '../App'
import { Provider } from 'react-redux';

// this is a little overkill here until we try to set up routes
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root;