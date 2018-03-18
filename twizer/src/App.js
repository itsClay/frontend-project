import React, { Component } from 'react';

import './App.css';
import TweetIndexContainer from './components/tweets/tweets_index_container'
import EditSidebar from './components/edit_sidebar/edit_sidebar'

class App extends Component {
  render() {
    return (
        <div className="App">
          <TweetIndexContainer />
          <EditSidebar />
        </div>
    );
  }
}

export default App;
