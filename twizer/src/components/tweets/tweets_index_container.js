import { connect } from  'react-redux'

import { fetchTweets } from '../../actions/tweet_actions'
import TweetsIndex from './tweets_index';

const mapStateToProps = state => ({
  tweets: state.tweets
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsIndex);