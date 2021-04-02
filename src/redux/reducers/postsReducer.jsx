import { GET } from '../types';

const initialState = {
  fetchedPosts: []
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        fetchedPosts: action.payload
      }
  
    default:
      return state
  }
};
