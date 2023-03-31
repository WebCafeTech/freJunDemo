// posts.actions.js

import axios from 'axios';

export const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    console.log("Inside action ", page)
    const response = await axios.get(`${API_URL}?_page=${page}`);
    const {data} = response;
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'FETCH_POSTS_FAILURE' });
  }
};

export const refreshPosts = () => async (dispatch) => {
  try {
    dispatch({ type: 'REFRESH_POSTS_REQUEST' });
    const response = await axios.get(`${API_URL}?_page=0`);
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'FETCH_POSTS_FAILURE' });
  }
};
