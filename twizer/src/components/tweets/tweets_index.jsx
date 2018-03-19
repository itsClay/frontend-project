import React from 'react'
import Moment from 'moment'

import './tweets_index.css'
import TweetCard from './tweet_card'

class TweetsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
    this.formateDate = this.formatDate.bind(this);
    this.formatColumn = this.formatColumn.bind(this);
  }

  componentWillMount() {
    // fetch the different tweets we need with some loading swapping
    (() => {
      this.setState({isLoading: true})
      this.props.fetchTweets('Trizic');
      this.props.fetchTweets('laughingsquid')
      this.props.fetchTweets('techcrunch')
      this.setState({isLoading: false})
    })()
  }

  formatDate(twitterDate) {
    return Moment(twitterDate).fromNow()
  }

  formatColumn() {
    // finding our column settings on localStorage since this will
    // replace our traditional store for settings items.
    let newCol = '1'
    let storage = JSON.parse(window.localStorage.getItem('settings'))
    if (storage.settings !== undefined) {
      newCol = storage.settings.columns
    }
    return `col-${newCol}`
  }


  render() {
    if(this.state.isLoading) {
      return (<h2>...Loading</h2>)
    }
    const tweets = Object.values(this.props.tweets)

    return (

      <div>
        <div className="TweetsIndex__Header">Tweets index</div>
        <div className="TweetsIndex">
          {
            tweets.map((tweet, idx) => (
              <TweetCard 
                key={idx}
                content={tweet.text} 
                created_at={this.formatDate(tweet.created_at)} 
                link={
                  // not every tweet seems to come with a link to its tweet (perhaps if its deleted?)
                  // design decision to just send the user to the home page for now if there is none
                  tweet.entities.urls[0] === undefined ? "https://twitter/com" : tweet.entities.urls[0].url 
                } 
                username={tweet.user.screen_name}
                extraClass={this.formatColumn()}
              />
            ))
          }
        </div>
      </div>

    )
  }

}

export default TweetsIndex;