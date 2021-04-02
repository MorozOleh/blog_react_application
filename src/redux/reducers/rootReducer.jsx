import { combineReducers } from 'redux';
import { postReducer } from './postsReducer';

export const blogApp = combineReducers({
  postReducer,
});