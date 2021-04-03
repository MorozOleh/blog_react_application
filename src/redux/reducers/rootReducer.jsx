import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { modalReducer } from './modalReducer';
import { commentsReducer } from './commentsReducer';


export const blogApp = combineReducers({
  postsReducer,
  modalReducer,
  commentsReducer
});
