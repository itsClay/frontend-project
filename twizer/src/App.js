import React, { Component } from 'react';

import './App.css';
import TweetIndexContainer from './components/tweets/tweets_index_container'

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Hello, world</h1>
          <TweetIndexContainer />
        </div>
    );
  }
}

export default App;
