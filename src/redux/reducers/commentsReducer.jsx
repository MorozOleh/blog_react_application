import { GET_COMMENTS, GET_POST_COMMENTS } from '../types';

const initialState = {
  fetchedComments: []
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COMMENTS:
      return {
        ...state,
        fetchedComments: [...action.payload]
      }
    
    case GET_POST_COMMENTS:
      return {
        ...state,
        fetchedComments: state.fetchedComments.filter(
          comment => comment.postId === +action.payload
        )
      }
  
    default:
      return state
  }
};
