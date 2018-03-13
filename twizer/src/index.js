import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/store'
import { fetchTweets } from './actions/tweet_actions'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore()
  console.log('STORE: ',store)

  window.store = store;
  window.fetchTweets = fetchTweets

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  registerServiceWorker();
})
