import axios from 'axios';

// Action constants
export const FETCH_POSTS = 'FETCH_POSTS';

// constants
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=23456rtyu456rtyh4567gh'

export function fetchPosts()
{
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return(
  {
    type: FETCH_POSTS,
    payload: request
  })
}
