import React from 'react';

class TweetsIndex extends React.Component {

  componentWillMount() {
    this.props.fetchTweets('Trizic');
    console.log(this.props)
  }


  render() {
    return (
      <h2> Tweets index
      </h2>
    )
  }
}

export default TweetsIndex