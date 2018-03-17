import axios from 'axios';

export const fetchTweets = (screen_name = 'Trizic') => {
  return axios({
    method: 'GET',
    url: `/user_timeline/${screen_name}`,
    withCredentials: true,
  })
}