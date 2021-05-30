import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/v1.0';

class UserService {
  getUserDetails() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAllTweets() {
    return axios.get(API_URL + '/tweets', { headers: authHeader() });
  }

  saveTweet(username, tweet) {
    let options = {
      method: 'post',
      url: API_URL + `/tweets/${username}/add`,
      data: tweet,
      headers: authHeader()
    }
    return axios(options);
  }

  likeTweet(username, tweetId) {
    let options = {
      method: 'put',
      url: API_URL + `/tweets/${username}/like/${tweetId}`,
      data : {},
      headers: authHeader()
    }

    return axios(options);
  }

  getUserTweets(username) {
    return axios.get(API_URL + `/tweets/${username}`, { headers: authHeader() });
  }

  deleteTweet(username,tweetId) {

    let options = {
      method: 'delete',
      url: API_URL + `/tweets/${username}/delete/${tweetId}`,
      data : {},
      headers: authHeader()
    }

    return axios(options);
  }

  searchUser(searchText) {
    return axios.get(API_URL + `/users/search/${searchText}`, { headers: authHeader() });
  }

}

export default new UserService();