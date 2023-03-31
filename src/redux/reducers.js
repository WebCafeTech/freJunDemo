// posts.reducer.js

const initialState = {
    data: [],
    currentPage: 0,
    isRefreshing: false,
    isFetching: false,
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          isFetching: true,
        };
      case 'FETCH_POSTS_SUCCESS':
        console.log("Inside post success", state.currentPage)
        return {
          ...state,
          data: state.currentPage === 0 ? action.payload : [...state.data, ...action.payload],
          currentPage: state.currentPage + 1,
          isFetching: false,
          isRefreshing: false,
        };
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          isFetching: false,
          isRefreshing: false,
        };
      case 'REFRESH_POSTS_REQUEST':
        return {
          ...state,
          isRefreshing: true,
          currentPage: 0,
        };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  