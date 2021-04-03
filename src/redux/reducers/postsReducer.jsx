import { GET, GET_POST } from '../types';

const initialState = {
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        fetchedPosts: action.payload
      }
    
    case GET_POST:
      return {
        ...state,
        fetchedPosts: state.fetchedPosts.filter(
          post => post.id === action.payload
        )
      }
  
    default:
      return state
  }
};
