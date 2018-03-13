import axios from 'axios'

import { CONSUMER_KEY, CONSUMER_SECRET } from '../secret_keys';

const username1 = 'Trizic'
const username2 = 'laughingsquid'
const username3 = 'techcrunch'

const api = axios.create({
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
  // baseURL: 'https://api.twitter.com/1.1/',
  headers: {
    Authorization: `oauth_consumer_key=${CONSUMER_KEY}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1520898724&oauth_nonce=oIp3iW&oauth_version=1.0&oauth_signature=a93pBAPkgI63piwEo8DrxXi1gGs%3D`
  },
  params: { screen_name: `${username1}`, count: 30 },
  withCredentials: true
})

export const fetchTweets = () => {
  api.get().then(resp => {
    console.log(resp)
    return resp.data
  })
}